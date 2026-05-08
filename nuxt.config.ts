export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'zh',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      script: [
        {
          src: 'https://5gvci.com/act/files/tag.min.js?z=10979410',
          'data-cfasync': 'false',
          async: true,
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-04-03',
})