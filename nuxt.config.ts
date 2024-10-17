// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      }
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
