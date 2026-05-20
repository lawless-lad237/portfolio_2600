// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@vueuse/motion/nuxt', '@nuxt/image'],
  css: ['~/assets/css/global.css', '~/assets/css/main.css'],
  image: {
    domains: ['d3ynb031qx3d1.cloudfront.net']
  }
})
