<template>
  <div class="absolute top-2 right-2 z-10">
    <div
      class="clock bg-zinc-950 text-white tracking-wider text-xs font-semibold py-1 px-3 border-zinc-900 rounded-md"
    >
      <span>{{ time }} PHST</span>
    </div>
    >
  </div>
</template>

<script setup>
const time = ref('0:00 AM')
// Function to update the clock
const updateClock = () => {
  const now = new Date()
  let hours = now.getHours()
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const ampm = hours >= 12 ? 'PM' : 'AM'

  // Convert to 12-hour format
  hours = hours % 12 || 12 // `0` should be displayed as `12`

  time.value = `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`
}

// Start the interval when the component mounts
let interval
onMounted(() => {
  updateClock()
  interval = setInterval(updateClock, 1000)
})

// Cleanup the interval when the component unmounts
onUnmounted(() => {
  clearInterval(interval)
})
</script>
