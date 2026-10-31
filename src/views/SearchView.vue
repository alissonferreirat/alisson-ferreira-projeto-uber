<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import AppIcon from '../components/AppIcon.vue'
import TripHeader from '../components/TripHeader.vue'
import { history } from '../data'
import { store } from '../store'

const router = useRouter()

const filtered = computed(() => {
  const q = store.query.trim().toLowerCase()
  return q ? history.filter(h => (h.name + h.addr).toLowerCase().includes(q)) : history
})

function choose() {
  store.query = ''
  router.push('/ride')
}
</script>

<template>
  <div class="view">
    <TripHeader mode="search" @submit="choose" />
    <div class="screen">
      <button class="saved"><span class="dot"><AppIcon n="star" :s="22" /></span>Saved planes</button>
      <button v-for="(h, i) in filtered" :key="i" class="hist" @click="choose">
        <span class="dot"><AppIcon n="clock" :s="26" /></span>
        <div><b>{{ h.name }}</b><small>{{ h.addr }}</small></div>
      </button>
      <p v-if="!filtered.length" class="empty">Nenhum lugar encontrado. Tente outro nome.</p>
    </div>
  </div>
</template>

<style scoped>

.saved.hist {
  display:flex;
  gap:16px;
  align-items:center;
  padding:0 16px;
  width:100%;
  flex:none;
}

.saved {
  height:64px;
  font-size:15px;
  border-bottom:8px solid var(--band);
  margin-top:12px;
  position:relative;
}

.saved::before {
  content:"";
  position:absolute;
  top:-8px;
  left:0;
  right:0;
  height:8px;
  background:var(--band);
}

.hist {
  height:66px;
  border-bottom:1px solid var(--line);
}

.dot{width:30px;
  height:29px;
  border-radius:50%;
  background:#aaa;
  display:grid;
  place-items:center;
  color:#fff;
  flex:none;
}

.hist b {
  display:flex;
  font-size:15px;
  font-weight:500;
}

.hist small {
  color:#bdbdbd;
  font-size:12px;
}

.hist div {
  min-width:0;
}

</style>
