// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  nitro: {
    preset: 'static'
  },
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon', 'unplugin-icons/nuxt'],
  icon: {
    serverBundle: 'local',
  },
  $production: {
    routeRules: {
      '/': { prerender: true }
    }
  },
  css: [
    '~/assets/css/main.css',
    'simplebar',
    // swiper deps
    "swiper/css",
    "swiper/css/navigation",
    "swiper/css/pagination",
    "swiper/css/effect-coverflow",
    "swiper/css/autoplay"
  ]
})
