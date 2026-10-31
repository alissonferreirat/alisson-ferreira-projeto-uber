<script setup>
import ScheduleModal from './components/ScheduleModal.vue'
import ToastMessage from './components/ToastMessage.vue'
</script>

<template>
  <div class="phone">
    <router-view />
    <ScheduleModal />
    <ToastMessage />
  </div>
</template>

<style>
.phone {
  position:relative;
  width:390px;
  height:844px;
  max-height:100vh;
  margin:auto;
  background:#fff;
  overflow:hidden;
  box-shadow:0 10px 40px #0003;
  display:flex;
  flex-direction:column;
}

@media(max-width:430px)
{
  .phone {
  width:100%;height:100vh;max-height:none;
  }
}

</style>
