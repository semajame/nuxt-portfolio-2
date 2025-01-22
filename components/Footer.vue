<template>
  <footer class="mt-10">
    <div class="flex justify-between w-full">
      <p class="text-white">© {{ date.getFullYear() }} James Anquillano.</p>
      <p class="text-white">All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const date = new Date()
</script>
