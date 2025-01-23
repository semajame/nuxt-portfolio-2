<template>
  <div class="bg-gradient-to-b from-gray-950 to-black p-5">
    <div class="max-w-lg mx-auto">
      <div class="py-5">
        <Header />
        <slot />

        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
