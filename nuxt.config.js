// const jsonImporter = require('node-sass-json-importer');

export default {
  server: {
     port: 3000,
    // host: '127.0.0.1'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ahbs-websites',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '@/assets/scss/var.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        locales: ['en', 'ar'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              welcome: 'Welcome'
            },
            ar: {
              welcome: 'مرحبا'
            }
          }
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extend (config, ctx) {
    //   ctx.loaders.scss.sassOptions.importer = jsonImporter();
    //   console.log(ctx.loaders.sass.sassOptions);
    // }
  },
  // router: {
  //   trailingSlash: false
  // }
}
