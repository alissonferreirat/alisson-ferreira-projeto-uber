<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import AppIcon from './AppIcon.vue'
import { store } from '../store'

const props = defineProps({ mode: { type: String, default: 'search' } }) // 'search' | 'stops'
const emit = defineEmits(['submit'])
const router = useRouter()
const isStops = computed(() => props.mode === 'stops')

function removeStop() {
  if (store.stops.length > 1) store.stops.pop()
  else store.stops[0] = ''
}
</script>

<template>
  <div class="head">
    <div class="top">
      <button class="back" @click="router.back()" aria-label="Voltar"><AppIcon n="back" :s="28" /></button>
      <span v-if="!isStops" class="rider"><i><AppIcon n="person" :s="18" /></i>Switch rider <AppIcon n="chevD" :s="16" /></span>
    </div>

    <div class="route">
      <div class="rail">
        <i :style="isStops ? 'background:#aaa' : ''"></i><s></s><u v-if="!isStops"></u>
      </div>

      <div class="fields">
        <div class="f" :class="{ act: !isStops }" @click="!isStops && router.push('/pickup')">
          <input v-model="store.pickup" :placeholder="isStops ? '' : 'Enter pick-up location'"
                 @focus="!isStops && router.push('/pickup')">
          <span v-if="isStops" class="grip"></span>
        </div>

        <template v-if="isStops">
          <div v-for="(s, i) in store.stops" :key="i" class="f rel">
            <input v-model="store.stops[i]" placeholder="Add a stop" @keyup.enter="emit('submit')">
            <span class="grip"></span>
            <span class="num">{{ i + 1 }}</span>
          </div>
          <div class="f rel add" @click="store.stops.push('')">Add a stop<span class="grip push"></span>
            <span class="plusmark">+</span>
          </div>
        </template>

        <div v-else class="f">
          <input v-model="store.query" placeholder="Where to?" @keyup.enter="emit('submit')">
        </div>
      </div>

      <button v-if="!isStops" class="plus" @click="router.push('/stops')" aria-label="Adicionar paradas">
        <AppIcon n="plus" :s="24" />
      </button>
      <button v-else class="xbtn" @click="removeStop" aria-label="Remover parada">×</button>
    </div>
  </div>
</template>

<style scoped>

.head {
  box-shadow:0 2px 6px #0002;
  position:relative;
  z-index:2;
  flex:none;
  background:#fff;
  padding-bottom:12px;
}

.rider {
  position:absolute;
  left:0;
  right:0;
  text-align:center;
  font-size:14px;
  display:flex;
  gap:8px;
  align-items:center;
  justify-content:center;
  pointer-events:none;
}

.rider i {
  width:28px;
  height:28px;
  border-radius:50%;
  background:var(--soft);
  display:grid;
  place-items:center;
  color:#888;
}

.route {
  display:flex;
  align-items:flex-start;
  gap:14px;
  padding:4px 14px 0 24px;
}

.rail {
  width:12px;
  align-self:stretch;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding-top:16px;
}

.rail i {
  width:8px;
  height:8px;
  border-radius:50%;
  background:#000;
}

.rail s {
  width:1px;
  flex:1;
  background:#999;
  margin:3px 0;
  min-height:16px;
}

.rail u {
  width:8px;
  height:8px;
  background:#aaa;
  margin-bottom:14px;
}

.fields {
  flex:1;
  display:flex;
  flex-direction:column;
  gap:6px;
}

.f {
  height:36px;
  background:var(--band);
  padding:0 12px;
  font-size:15px;
  display:flex;
  align-items:center;
  gap:8px;
}

.f.act {
  background:#e4e4e4;
}

.f input::placeholder {
  color:#8a8a8a;
}

.rel {
  position:relative;
}

.add {
  color:#999;
}

.push {
  margin-left:auto;
}

.num {
  position:absolute;
  left:-30px;width:16px;height:16px;background:#000;color:#fff;font-size:11px;display:grid;place-items:center;
}

.plusmark {
  position:absolute;
  left:-31px;
  font-size:18px;
  color:#999;
}

.grip {
  width:18px;
  height:11px;
  border-top:3px solid #8e7fc9;
  border-bottom:3px solid #8e7fc9;
  flex:none;
}

.plus {
  width:40px;
  height:40px;
  border-radius:50%;
  background:var(--soft);
  display:grid;
  place-items:center;
  align-self:center;
  flex:none;
}

.xbtn {
  font-size:22px;
  padding:0 10px;
  align-self:center;
}

</style>
