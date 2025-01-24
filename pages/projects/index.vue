<template>
  <div class="my-10 text-white">
    <div class="flex gap-5 justify-between">
      <NuxtLink to="/" class="text-white hover:underline"
        >&larr; Go Back</NuxtLink
      >
      <h1 class="text-white text-xl">All Projects</h1>
    </div>

    <div class="flex flex-col gap-12 mt-5">
      <div v-for="(project, index) in projects" :key="index">
        <div class="relative w-full">
          <div class="absolute top-0 flex w-full justify-center">
            <div
              class="left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000"
            />
          </div>

          <div
            class="dark transition duration-300 ease-in-out hover:bg-gradient-to-b hover:from-gray-950 hover:to-primary/[0.01] flex h-full items-center justify-center rounded-lg border border-gray-800 bg-black"
          >
            <NuxtImg
              :src="project.img"
              format="webp"
              densities="x1"
              alt="Project Image"
              class="mt-7 rounded-t-md sm:w-[450px] w-[300px] h-full rounded-b-none"
            />
          </div>
        </div>
        <h1 class="text-white font-semibold mt-3">
          {{ project.title }}
        </h1>
        <p class="text-gray-400 text-sm">
          {{ project.description }}
        </p>

        <div class="my-2">
          <div class="inline-block">
            <NuxtLink
              :to="project.link"
              class="border border-zinc-900 bg-black py-3 rounded-lg px-5 flex gap-2 items-center hover:bg-white hover:text-black transition duration-300"
            >
              <Icon name="mynaui:globe" width="24" height="24" />
              <span class="font-semibold text-sm">Demo</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '#app'

// Set up meta tags for the page
useHead({
  title: 'Projects - James', // Set the dynamic page title
  meta: [
    {
      hid: 'description', // Use `hid` to ensure meta tags are uniquely identified
      name: 'description',
      content:
        'Explore all projects by James, including scheduling apps, e-commerce platforms, and more, built with modern frameworks like Angular, Vue, and Nuxt.', // Add a meaningful description
    },
  ],
})

const projects = [
  {
    img: '/assets/benedicto.png',
    title: 'Benedicto College Scheduling',
    description:
      'Fullstack online class scheduling for Benedicto College using Angular, Bootstrap, Mysql and Nestjs.',
    link: 'https://bc-scheduling-1024.vercel.app/',
    githubLink: 'bc-scheduling-1024.vercel.app',
  },

  {
    img: '/assets/greenery.png',
    title: 'The Greenery',
    description: 'Plant ecommerce website using Vue and Tailwind.',
    link: 'https://greenery-ecommerce.vercel.app/',
    githubLink: 'greenery-ecommerce.vercel.app',
    tech: {
      skills: ['Vue', 'Tailwind'],
    },
  },
  {
    img: '/assets/apple.png',
    title: 'Apple Ui',
    description: 'Apple Clone using Nuxt and Tailwind.',
    link: 'https://apple-uii.vercel.app/',
    githubLink: 'apple-uii.vercel.app',
    tech: {
      skills: ['Nuxt', 'Tailwind'],
    },
  },
  {
    img: '/assets/kingdom.png',
    title: 'Wild Kingdom',
    description: 'Real animal information using api, Nuxt and Tailwind.',
    link: 'https://wild-kingdom.vercel.app/',
    githubLink: 'wild-kingdom.vercel.app',
    tech: {
      skills: ['Nuxt', 'Tailwind'],
    },
  },
  {
    img: '/assets/crypto.png',
    title: 'CryptoCurrency X',
    description: 'Real time crypto updates using api, Vue and Tailwind.',
    link: 'https://crypto-currency-x.vercel.app/',
    githubLink: 'crypto-currency-x.vercel.app',
    tech: {
      skills: ['Vue', 'Tailwind'],
    },
  },
  {
    img: '/assets/hotel.png',
    title: 'Grand Standard',
    description: 'Hotel Website using Vue and SCSS.',
    link: 'https://grand-standard-hotel.vercel.app/',
    githubLink: 'grand-standard-hotel.vercel.app',
    tech: {
      skills: ['Vue', 'SCSS'],
    },
  },
]
</script>
