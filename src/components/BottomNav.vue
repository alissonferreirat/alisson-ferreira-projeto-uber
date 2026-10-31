<script setup>
import { useRouter } from 'vue-router'
import AppIcon from './AppIcon.vue'
import { notify } from '../store'

defineProps({ active: { type: String, default: 'home' } })
const router = useRouter()
</script>

<template>
  <nav class="nav">
    <button :class="{ on: active === 'home' }" @click="router.push('/')"><AppIcon n="home" :s="26" />Home</button>
    <button @click="notify('Services em breve')"><AppIcon n="grid" :s="26" />Services</button>
    <button :class="{ on: active === 'trips' }" @click="router.push('/trips')"><AppIcon n="receipt" :s="26" />Activity</button>
    <button @click="notify('Account em breve')"><AppIcon n="person" :s="26" />Account</button>
  </nav>
</template>

<style scoped>

.nav {
  display:flex;
  border-top:1px solid var(--line);
  background:#fff;
  flex:none;
  padding-bottom:6px;
}

.nav button {
  flex:1;
  padding:8px 0 4px;
  font-size:13px;
  color:#9a9a9a;
  display:flex;
  flex-direction:column;align-items:center;gap:3px;text-align:center;
}

.nav .on {
  color:#000;
  font-weight:600;
}

</style>
