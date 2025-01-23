// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

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

      htmlAttrs: {
        lang: 'en',
      },

      script: [
        {
          defer: true, // Defer loading
        },
      ],
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
  ],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },

  icon: {
    serverBundle: {
      collections: ['uil', 'mdi', 'mynaui'], // <!--- this
    },
  },

  googleFonts: {
    families: {
      // List the fonts you want here
      Inter: true, // All weights of Inter
      Doto: true, // All weights for Lora
    },

    prefetch: true, // Preload fonts during the build
    preconnect: true, // Preconnect to Google's font servers
    display: 'swap', // Ensure text remains visible during font loading
  },
})
