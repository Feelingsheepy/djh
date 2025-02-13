// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    'vue3-perfect-scrollbar/nuxt'
  ],

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27'
})