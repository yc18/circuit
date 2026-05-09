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
        {
          innerHTML: "(function(s){s.dataset.zone='10980106',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))",
        },
        {
          innerHTML: "(function(s){s.dataset.zone='10982927',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))",
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-04-03',
})