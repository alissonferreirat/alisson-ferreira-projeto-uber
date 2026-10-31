import { reactive } from 'vue'

export const store = reactive({
  pickup: 'No 36 Balarabe Musa Cres',
  query: '',
  stops: [''],
  rideId: 'x',
  pickupLabel: 'Now',
  scheduleOpen: false,
  toast: ''
})

let timer
export function notify(msg) {
  store.toast = msg
  clearTimeout(timer)
  timer = setTimeout(() => (store.toast = ''), 2200)
}
