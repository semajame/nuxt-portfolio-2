<template>
  <footer class="mt-10">
    <div class="flex justify-between w-full">
      <p class="text-white text-xs sm:text-sm">
        © {{ date.getFullYear() }} James Anquillano.
      </p>
      <p class="text-white text-xs sm:text-sm">All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const date = new Date()
</script>
