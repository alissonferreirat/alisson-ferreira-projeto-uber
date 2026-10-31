<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import AppIcon from '../components/AppIcon.vue'
import IMG from '../images'
import { rides } from '../data'
import { store, notify } from '../store'

const router = useRouter()
const current = computed(() => rides.find(r => r.id === store.rideId))
const confirmRide = () => notify(`${current.value.name} solicitado! Procurando motorista…`)
</script>

<template>
  <div class="view">
    <div class="mapbox">
      <img class="m" :src="IMG.mapRide" alt="Mapa com a rota">
      <button class="hot" @click="router.push('/')" aria-label="Voltar"></button>
    </div>

    <div class="screen">
      <div class="grab"></div>
      <div class="notice">Fares are slightly higher due to increased demand</div>

      <button v-for="r in rides" :key="r.id" class="fare" :class="{ sel: r.id === store.rideId }" @click="store.rideId = r.id">
        <img :src="r.img" alt="">
        <span class="t">
          <b>{{ r.name }}
            <span v-if="r.seats" class="seats"><AppIcon n="person" :s="14" />{{ r.seats }}</span>
          </b>
          {{ r.time }} · {{ r.away }} min away
          <em v-if="r.save">{{ r.save }}</em>
        </span>
        <span class="p">NGN {{ r.price }}</span>
      </button>

      <div class="cash"><img :src="IMG.cash" alt="">Cash</div>
      <button class="btn" @click="confirmRide">Confirm {{ current.name }}</button>
    </div>
  </div>
</template>

<style scoped>

.grab {
  width:52px;
  height:5px;
  border-radius:3px;
  background:#ddd;
  margin:8px auto 10px;
  flex:none;
}

.notice {
  text-align:center;
  font-size:14px;
  color:#666;
  padding:6px 0 16px;
  flex:none;
}

.fare {
  display:flex;
  gap:14px;
  align-items:flex-start;
  padding:16px;
  width:100%;
  position:relative;
  min-height:100px;
  flex:none;
}

.fare.sel {
  background:var(--soft);
}

.fare img {
  width:84px;
  height:70px;
  object-fit:contain;
  flex:none;
}

.t {
  flex:1;
  font-size:14px;
  color:#222;
  padding-top:2px;
}

.t b {
  display:flex;
  align-items:center;
  gap:6px;
  font-size:16px;
  font-weight:500;
  margin-bottom:6px;
}

.sel .t b {
  font-size:21px;
  font-weight:700;
}

.seats {
  font-size:14px;
  display:flex;
  align-items:center;
  gap:2px;
}

.t em {
  display:block;
  font-style:normal;
  color:var(--blue);
  font-weight:600;
  margin-top:6px;
}

.p {
  font-weight: 680px;
  font-size:15px;
  position:absolute;
  right:16px;
  top:14px;
}

.sel .p {
  font-size:18px;
}

.cash {
  display:flex;
  gap:16px;
  align-items:center;
  padding:18px 16px;
  border-top:8px solid var(--band);
  font-size:16px;
  flex:none;
}

.cash img {
  width:36px;
}

</style>
