<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import AppIcon from '../components/AppIcon.vue'
import { trips } from '../data'

const router = useRouter()
const tab = ref('All')

const groups = computed(() => {
  const map = new Map()
  trips
    .filter(t => tab.value === 'All' || t.cat === tab.value)
    .forEach(t => { if (!map.has(t.month)) map.set(t.month, []); map.get(t.month).push(t) })
  return [...map].map(([month, items]) => ({ month, items }))
})
</script>

<template>
  <div class="view">
    <div class="top">
      <button class="back" @click="router.push('/')" aria-label="Voltar"><AppIcon n="back" :s="28" /></button>
    </div>
    <h2 class="tt">My Trips</h2>
    <div class="seg">
      <button v-for="t in ['All', 'Personal', 'Work']" :key="t" :class="{ on: tab === t }" @click="tab = t">{{ t }}</button>
    </div>

    <div class="screen">
      <template v-for="g in groups" :key="g.month">
        <div class="mon">{{ g.month }}</div>
        <div v-for="(t, i) in g.items" :key="i" class="trip">
          <span class="circ"><AppIcon n="car" :s="20" /></span>
          <div><b>{{ t.to }}</b><small>{{ t.date }}</small></div>
          <div class="v">{{ t.price }}<small v-if="t.cancelled">Trip Cancelled</small></div>
        </div>
      </template>
      <p v-if="!groups.length" class="empty">Nenhuma viagem nesta categoria ainda.</p>
    </div>
  </div>
</template>

<style scoped>

.tt {
  font-size:24px;
  font-weight:600;
  padding:10px 16px 18px;
}

.seg {
  display:flex;
  border-bottom:1px solid var(--line);
  flex:none;
}

.seg button {
  flex:1;
  text-align:center;
  padding:14px 0;
  font-size:16px;
  color:#555;
  border-bottom:2px solid transparent;
}

.seg .on {
  border-color:var(--green);
  color:#000;
  font-weight:600;
}

.mon {
  font-size:15px;font-weight:700;padding:22px 16px 10px;
}

.trip {
  display:flex;
  align-items:center;
  gap:14px;
  padding:12px 16px;
}

.trip .circ {
  background:var(--band);
  color:#222;
}

.trip div {
  flex:1;
  min-width:0;
}

.trip b {
  display:block;
  font-weight:500;font-size:16px;
}

.trip small {
  color:#555;font-size:13px;
}

.trip .v {
  flex:none;text-align:right;font-weight:600;font-size:16px;
}

.trip .v small {
  display:block;
  font-weight:400;
  font-size:11px;
  color:#555;
}

</style>
