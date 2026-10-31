<script setup>
import { store } from '../store'
</script>

<template>
  <div v-if="store.toast" class="toast" role="status">{{ store.toast }}</div>
</template>

<style scoped>

.toast {
  position:absolute;
  left:16px;
  right:16px;
  bottom:96px;
  background:#000;
  color:#fff;
  padding:14px;
  border-radius:6px;
  font-size:14px;
  text-align:center;
  z-index:9;
}

</style>
