// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          charset: "utf-16",
          viewport: "width=device-width,initial-scale=1",
          title: "Nuxt 3App",
          titleTemplate: "Nuxt3-Blog",
          meta: [{ name: "description", content: "Nuxt-3" }],
        },
      },
  nitro: {
    plugins: ["~/server/index.ts"],
  },

  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
  },

  css:[
    'vuetify/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css'
  ],

  build:{
    transpile:['vuetify']
  }
});
