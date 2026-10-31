<script setup>
import { computed, reactive } from 'vue'
import { store, notify } from '../store'

const sched = reactive({ date: '2027-01-01', start: '09:05', end: '09:15' })

const dateText = computed(() =>
  new Date(sched.date + 'T00:00')
    .toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })
    .replace(',', '')
)

function openPicker(e) {
  if (e.target.showPicker) { try { e.target.showPicker() } catch {} }
}

function setTime() {
  if (sched.end <= sched.start) return notify('O horário final deve ser depois do inicial')
  const d = new Date(sched.date + 'T00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
  store.pickupLabel = `${d}, ${sched.start}`
  store.scheduleOpen = false
  notify('Horário de embarque definido')
}
</script>

<template>
  <div v-if="store.scheduleOpen" class="scrim" @click.self="store.scheduleOpen = false">
    <div class="modal" role="dialog" aria-label="Schedule a trip">
      <h2>Schedule a trip</h2>
      <div class="mrow">{{ dateText }}
        <input type="date" v-model="sched.date" aria-label="Data" @click="openPicker">
      </div>
      <div class="mrow">{{ sched.start }} – {{ sched.end }}
        <input type="time" v-model="sched.start" aria-label="Início" style="width:50%" @click="openPicker">
        <input type="time" v-model="sched.end" aria-label="Fim" style="width:50%;left:50%" @click="openPicker">
      </div>
      <button class="btn" @click="setTime">Set pick-up time</button>
    </div>
  </div>
</template>

<style scoped>

.scrim {
  position:absolute;
  inset:0;
  background:#0009;
  display:flex;
  align-items:flex-end;
  z-index:5;
}

.modal {
  background:#fff;
  width:100%;
  padding-bottom:20px;
  animation:up .25s ease-out;
}

@keyframes up{from{transform:translateY(30%);opacity:.5}}

@media(prefers-reduced-motion:reduce){.modal{animation:none}}

.modal h2 {
  text-align:center;
  font-weight:400;
  font-size:24px;
  padding:26px 0 22px;
}

.mrow {
  position:relative;
  text-align:center;
  font-size:18px;
  padding:20px 0;
  border-top:1px solid var(--line);margin:0 16px;
}

.mrow input {
  position:absolute;
  inset:0;
  opacity:0;
  cursor:pointer;
}

.modal .btn {
  margin-top:20px;
}

</style>
