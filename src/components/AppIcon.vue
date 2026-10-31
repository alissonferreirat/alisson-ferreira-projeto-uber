<script setup>
defineProps({ n: String, s: { type: Number, default: 20 } })

const PATHS = {
  back:'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z',
  arrow:'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z',
  pin:'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z',
  clock:'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z',
  star:'M12 17.3l6.2 3.7-1.6-7 5.4-4.7-7.2-.6L12 2 9.2 8.7 2 9.3l5.4 4.7-1.6 7z',
  search:'M15.5 14h-.8l-.3-.3A6.5 6.5 0 109.5 16c1.6 0 3.1-.6 4.2-1.6l.3.3v.8l5 5 1.5-1.5-5-5zm-6 0a4.5 4.5 0 110-9 4.5 4.5 0 010 9z',
  chevR:'M8.6 16.6L13.2 12 8.6 7.4 10 6l6 6-6 6z',
  chevD:'M7.4 8.6L12 13.2l4.6-4.6L18 10l-6 6-6-6z',
  person:'M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z',
  home:'M12 3L2 12h3v8h5v-6h4v6h5v-8h3z',
  grid:'M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z',
  receipt:'M6 2h12v20l-3-2-3 2-3-2-3 2zM9 7h6v2H9zm0 4h6v2H9z',
  plus:'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z',
  car:'M18.9 6c-.2-.6-.8-1-1.4-1h-11c-.7 0-1.2.4-1.4 1L3 12v8h2v-2h14v2h2v-8zM6.5 16a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM5.2 11l1.3-4h11l1.3 4z'
}
</script>

<template>
  <svg :width="s" :height="s" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="flex:none">
    <path :d="PATHS[n]" />
  </svg>
</template>
