<script setup>
import { useRouter } from 'vue-router'
import AppIcon from '../components/AppIcon.vue'
import BottomNav from '../components/BottomNav.vue'
import IMG from '../images'
import { places } from '../data'
import { store, notify } from '../store'

const router = useRouter()
const place = places[0]
</script>

<template>
  <div class="view">
    <div class="screen">
      <div class="tabs">
        <button class="on"><img :src="IMG.carRide" alt="">Rides</button>
        <button @click="notify('Delivery em breve')"><span class="em">🥗</span>Delivery</button>
      </div>

      <div class="where" role="button" tabindex="0" @click="router.push('/search')" @keyup.enter="router.push('/search')">
        <b><AppIcon n="search" :s="30" />&nbsp;&nbsp;Where to?</b>
        <button class="now" @click.stop="store.scheduleOpen = true">
          <AppIcon n="clock" :s="22" />{{ store.pickupLabel }}<AppIcon n="chevD" :s="18" />
        </button>
      </div>

      <button v-for="n in 2" :key="n" class="place" @click="router.push('/ride')">
        <span class="circ"><AppIcon n="pin" :s="20" /></span>
        <div><b>{{ place.name }}</b><small>{{ place.addr }}</small></div>
        <AppIcon class="ch" n="chevR" :s="22" />
      </button>

      <div class="band"></div>
      <div class="sec"><span>Suggestions</span><a href="#" @click.prevent>See all</a></div>
      <div class="sugs">
        <button @click="router.push('/search')"><img :src="IMG.carRide" alt="">Ride</button>
        <button @click="notify('Package em breve')"><img :src="IMG.pkg" alt="">Package</button>
        <button @click="notify('Hourly em breve')"><img :src="IMG.hourly" alt="">Hourly</button>
      </div>

      <div class="band"></div>
      <div class="sec" style="padding-bottom:16px"><span>Ways to save with Uber</span></div>
      <div class="cards">
        <div class="wcard">
          <img :src="IMG.cardShare" alt="">
          <b>Share your ride <AppIcon n="arrow" :s="16" /></b>
          <small>Share the ride, share de cost</small>
        </div>
        <div class="wcard sm">
          <img :src="IMG.cardAdd" alt="">
          <b>Add a stop or 5</b>
          <small>Pick up friends also</small>
        </div>
      </div>

      <div class="promo"><img :src="IMG.promo" alt="One driver, many stops. Try Uber Hourly"></div>

      <div class="band"></div>
      <div class="sec" style="padding-bottom:16px"><span>Ways to save with Uber</span></div>
      <div class="ill"><img :src="IMG.airport" alt=""><img :src="IMG.avocado" alt=""></div>
    </div>
    <BottomNav active="home" />
  </div>
</template>

<style scoped>

.tabs {
  display:flex;
  justify-content:center;
  gap:34px;padding:22px 0 14px;
  flex:none
}

.tabs button {
  font-size:20px;
  font-weight:500;
  color:#6b6b6b;
  display:flex;
  gap:8px;
  align-items:center;
  padding-bottom:6px;
  border-bottom:2px solid transparent;
}

.tabs .on {
  color:#000;
  border-color:#000
}

.tabs img {
  width:36px;
}

.tabs .em {
  font-size:24px;
}

.where {
  margin:4px 16px 8px;
  height:56px;
  background:var(--soft);
  border-radius:32px;
  display:flex;
  align-items:center;
  padding:0 10px 0 14px;
  gap:10px;
  cursor:pointer;
  flex:none;
}

.where b {
  flex:1;
  font-weight:500;
  font-size:19px;
  color:#4b4b4b;
  border-right:1px solid #d6d6d6;
  height:38px;
  display:flex;
  align-items:center;
}

.now {
  background:#fff;
  border-radius:22px;
  height:36px;
  padding:0 12px;
  font-size:14px;
  font-weight:600;
  display:flex;
  gap:8px;
  align-items:center;
  margin-left:2px;
}

.place {
  display:flex;
  gap:14px;
  align-items:center;
  padding:0 16px;
  height:104px;
  width:100%;
  position:relative;
  flex:none;
}

.place.place::before {
  content:"";
  position:absolute;
  top:0;
  left:76px;
  right:0;
  height:1px;
  background:var(--line);
}

.place div {
  flex:1;
  min-width:0;
}

.place b {
  display:block;
  font-size:16px;
  font-weight:500;
}

.place small {
  display:block;
  font-size:14px;
  color:var(--mut);
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}

.place .ch {
  color:#999;
}

.sec {
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px 16px 18px;
  font-size:18px;
  font-weight:500;
}

.sec a {
  font-size:14px;
  color:#000;
  text-decoration:none;
}

.sugs {
  display:flex;
  gap:10px;padding:0 16px 22px;
}

.sugs button {
  flex:1;
  background:var(--soft);border-radius:8px;
  height:108px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:8px;font-size:13px;
  font-weight:500;
  text-align:center;
}

.sugs img {
  width:56px;height:56px;object-fit:contain;
}

.cards {
  display:flex;
  gap:10px;overflow-x:auto;padding:0 16px;scrollbar-width:none;
}

.cards::-webkit-scrollbar {
  display:none;
}

.wcard {
  flex:none;
  width:230px;
}

.wcard.sm {
  width:150px;
}

.wcard img {
  width:100%;
  height:84px;
  object-fit:cover;
  object-position:top;
  border-radius:8px;
}

.wcard b {
  display:flex;
  gap:6px;
  align-items:center;
  font-size:16px;
  font-weight:500;
  padding-top:10px;
}

.wcard small {
  display:block;
  color:var(--mut);
  font-size:14px;
  padding-top:6px;
}

.promo {
  margin:20px 16px 22px;
  border-radius:8px;
  overflow:hidden;
  flex:none;
}

.promo img {
  width:100%;
}

.ill {
  display:flex;
  gap:10px;overflow-x:auto;padding:0 16px 22px;scrollbar-width:none;
}

.ill img {
  flex:none;height:118px;border-radius:8px;width:auto;
}

</style>
