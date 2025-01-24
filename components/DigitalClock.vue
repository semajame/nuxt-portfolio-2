<template>
  <div class="absolute top-2 right-2 z-10">
    <div
      class="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 z-10 bg-zinc-900 text-white font-semibold text-sm border border-zinc-800 top-2 right-2"
    >
      <span
        class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
      ></span>
      <p
        class="inline-flex h-full w-full items-center justify-center rounded-md bg-gray-950 px-4 py-[2px] text-xs font-medium text-gray-50 backdrop-blur-3xl tracking-lighter"
      >
        {{ time }}
      </p>
    </div>
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
