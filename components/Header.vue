<template>
  <div>
    <header class="flex justify-start items-center gap-5">
      <div class="">
        <div
          class="relative h-[5rem] w-[5rem] overflow-hidden rounded-full border border-gray-800 backdrop-blur-3xl"
        >
          <span
            class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
          />

          <NuxtImg
            src="/assets/james_anq.webp"
            alt="Profile Picture"
            densities="x1"
            width="100"
            height="100"
            class="rounded-full p-1 flipping-image absolute z-10"
          />
        </div>
      </div>
      <div>
        <h1 class="text-2xl font-medium tracking-tighter text-white group">
          Hey, I'm James
          <span class="inline-block wave"> 👋 </span>
        </h1>

        <div class="flex justify-between pt-1">
          <div class="flex items-center gap-2">
            <div class="relative flex items-center">
              <!-- Static green dot -->
              <span
                class="w-2 h-2 bg-green-400 rounded-full inline-block"
              ></span>
              <!-- Pulsating effect -->
              <span
                class="absolute w-2 h-2 bg-green-400 rounded-full animate-ping"
              ></span>
            </div>
            <p
              class="underline decoration-dashed underline-offset-4 decoration-zinc-700 text-sm text-gray-400"
            >
              Available for work
            </p>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
