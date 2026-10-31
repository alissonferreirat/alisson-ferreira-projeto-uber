<script setup>
import { useRouter } from 'vue-router'
import TripHeader from '../components/TripHeader.vue'
import IMG from '../images'

const router = useRouter()
</script>

<template>
  <div class="view">
    <TripHeader mode="stops" @submit="router.push('/ride')" />
    <div class="screen">
      <p class="hint">Now you can add multiple stops</p>
      <img :src="IMG.mapStops" alt="Mapa de São Paulo" class="map">
    </div>
  </div>
</template>

<style scoped>

.hint {
  text-align:center;
  font-size:13px;
  color:#555;
  padding:14px 0 12px;
  flex:none;
}

.map {
  width:100%;
  flex:none;
}

</style>
