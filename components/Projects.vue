<!-- pages/index.vue -->
<template>
  <div class="py-5 mt-10">
    <div class="w-full">
      <div class="flex justify-between items-center">
        <span
          class="inline-flex items-center justify-center rounded-full border border-gray-800 bg-gradient-to-r from-gray-900 to-gray-950 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-3xl"
        >
          <span class="text-white"> Recent Projects </span>
        </span>
        <NuxtLink
          to="/projects"
          class="text-sm font-semibold text-gray-400 flex gap-2 items-center group transition hover:text-white"
        >
          View All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-4 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M18 8L22 12L18 16"></path>
            <path d="M2 12H22"></path>
          </svg>
        </NuxtLink>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        <!-- Project Card 1 -->
        <NuxtLink
          to="https://greenery-ecommerce.vercel.app/"
          class="group"
          target="_blank"
        >
          <div
            class="rounded-lg dark p-4 transition-all duration-300 border border-zinc-800 hover:bg-primary/[0.03]"
          >
            <div class="aspect-video mb-2 rounded-md overflow-hidden">
              <NuxtImg
                src="/assets/greenery.png"
                format="webp"
                densities="x1"
                class="h-full w-full object-cover"
              />
            </div>
            <h2 class="text-white text-lg font-semibold mb-2">The Greenery</h2>
            <p class="text-white text-xs">
              A frontend plants ecommerce website.
            </p>
          </div>
        </NuxtLink>

        <!-- Project Card 2 -->
        <NuxtLink
          to="https://bc-scheduling-1024.vercel.app/"
          class="group"
          target="_blank"
        >
          <div
            class="rounded-lg dark p-4 transition-all duration-300 hover:bg-primary/[0.03] border border-zinc-800"
          >
            <div class="aspect-video mb-2 rounded-md overflow-hidden">
              <NuxtImg
                src="/assets/benedicto.png"
                format="webp"
                densities="x1"
                class="h-full w-full object-cover"
              />
            </div>
            <h2 class="text-white text-lg font-semibold mb-2">
              Benedicto College
            </h2>
            <p class="text-white text-xs">A fullstack scheduling system.</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
