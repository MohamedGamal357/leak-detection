// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  ssr: true,

  // ========== START:: APP CONFIGURATIONS ========== //
  app: {
      // Start:: Head Configurations //
      head: {
          meta: [
              { charset: "utf-8" },
              {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1"
              },
          ],
          link: [
              { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
          ],
          style: [],
          script: [
              { 'src': '/wow.js' },
          ],
          noscript: []
      },
      // End:: Head Configurations //
  },

 tailwindcss: {
      cssPath: '~/assets/style/tailwind.scss',

  },

  css: [
      '~/assets/style/animation/animate.css',
      'primevue/resources/primevue.css',
      'primevue/resources/themes/tailwind-light/theme.css',
      '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  modules: [
      'vue3-carousel-nuxt',
      '@nuxtjs/tailwindcss',
      '@vite-pwa/nuxt',
      'nuxt-swiper',
      [

          '@nuxtjs/i18n',
          {
              locales: [
                  {
                      name: 'English',
                      code: 'en',
                      iso: 'en-US',
                      file: 'en.json',
                      dir: 'ltr',
                  },
                  {
                      name: 'عربي',
                      code: 'ar',
                      iso: 'ar-AR',
                      file: 'ar.json',
                      dir: 'rtl',
                  }
              ],
              lazy: true,
              langDir: 'locales/',
              defaultLocale: 'en',
              detectBrowserLanguage: false,
              vueI18nLoader: true,
          },
      ],
      [
          '@vee-validate/nuxt',
          {
              // disable or enable auto imports
              autoImports: true,
              // Use different names for components
              componentNames: {
                  Form: 'VeeForm',
                  Field: 'VeeField',
                  ErrorMessage: 'VeeErrorMessage',
              },
          },
      ],
      [
          '@pinia/nuxt', {

              autoImports: [
                  // automatically imports `defineStore`
                  'defineStore', // import { defineStore } from 'pinia'
                  ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
              ],

          }
      ],
      "@nuxt/image"
  ],

  // ========== START:: NUXT APP PLUGINS CONFIGURATIONS ========== //
  plugins: [
      '~/plugins/main.ts',
      '~/plugins/primeVue.ts',
      '~/plugins/i18n.client.ts',
      '~/plugins/vue3-tel-input.client',
      '~/plugins/vue-toastification.client',
      '~/plugins/fontawesome.client.ts',
  ],

  // ========== END:: NUXT APP PLUGINS CONFIGURATIONS ========== //

  runtimeConfig: {
      public: {
          baseURL: "https://iq.kairo.aait-d.com/api/v1/site/",
          generalURL: "https://iq.kairo.aait-d.com/api/v1/general/",
      },
  },

  build: {
      transpile: ['primevue', 'vue-toastification']
  },

  vite: {

      css: {
          preprocessorOptions: {
              scss: {
                  additionalData: `@import "~/assets/style/main.scss";`
              }
          }
      },
  },

  // ========== START:: DEVELOPMENT SERVER CONFIGURATIONS ========== //

  dev: true,

  devServer: {
      https: false,
      host: "0.0.0.0",
      port: 3000,
      url: "http://0.0.0.0:3000"
  },

  // ========== END:: DEVELOPMENT SERVER CONFIGURATIONS ========== //
  spaLoadingTemplate: false,

  compatibilityDate: '2024-08-15'
})
