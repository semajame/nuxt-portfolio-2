// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
  ],

  googleFonts: {
    families: {
      // List the fonts you want here
      Inter: true, // All weights of Inter
      Lora: true, // All weights for Lora
    },

    prefetch: true, // Preload fonts during the build
    preconnect: true, // Preconnect to Google's font servers
    display: 'swap', // Ensure text remains visible during font loading
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'James - Frontend Developer',
      meta: [
        {
          name: 'description',
          content: "James' eportfolio with the use of Nuxt and Tailwind ",
        },
      ],

      script: [
        {
          defer: true, // Defer loading
        },
      ],
    },
  },
})
