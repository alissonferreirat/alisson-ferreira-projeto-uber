<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import IMG from '../images'
import { store, notify } from '../store'

const router = useRouter()
const zoneQuery = ref('Ikeja City Mall')

function confirmPickup() {
  store.pickup = 'Ikeja City Mall - Main Entrance'
  notify('Pick-up confirmado')
  router.push('/search')
}
</script>

<template>
  <div class="view">
    <div class="mapbox">
      <img class="m" :src="IMG.mapPickup" alt="Zona de embarque">
      <button class="hot" @click="router.push('/search')" aria-label="Voltar"></button>
    </div>

    <div class="sheet">
      <h5>Choose your pick-up location</h5>
      <div class="sbar">
        <input v-model="zoneQuery" aria-label="Local">
        <button @click="notify('Buscando ' + zoneQuery + '…')">Search</button>
      </div>
      <div class="zone">
        <p>ICM - Select your pickup zone -- Ent...</p>
        <a href="#" @click.prevent="confirmPickup">ICM - Select your pickup zone --<br>Main Entrance</a>
      </div>
      <button class="btn" @click="confirmPickup">Confirm pick-up</button>
    </div>
  </div>
</template>

<style scoped>
.sheet {
  flex:none;
  background:#fff;
}

.sheet h5 {
  font-size:16px;
  font-weight:500;
  text-align:center;
  padding:18px 0;
  border-bottom:1px solid var(--line);
}

.sbar {
  display:flex;
  align-items:center;
  padding:0 16px;height:70px;font-size:16px;gap:10px;
}

.sbar button {
  background:var(--soft);
  border-radius:20px;
  padding:10px 18px;
  font-size:14px;
  font-weight:500;
}

.zone {
  background:var(--band);
  padding:20px 16px 32px;
  text-align:center;
  border-top:1px solid var(--line);
  border-bottom:1px solid var(--line);
  margin-bottom:16px;
}

.zone p {
  font-size:19px;
  color:#666;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}

.zone a {
  display:block;
  color:var(--blue);
  font-size:20px;
  margin-top:16px;
  line-height:1.3;
  text-decoration:none;
}

</style>
