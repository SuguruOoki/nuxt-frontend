import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'universal',
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT || 'insert-backend-api-url',
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || 'firebase-api-key',
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || 'firebase-url'
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'Sample',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'sample' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'sample'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'OGP-access-url' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Sapmle'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'og-description'
      },
      { hid: 'og:image', property: 'og:image', content: 'ogp-image' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', property: 'twitter:site', content: 'twitter-id' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=M+PLUS+1p' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['normalize.css', '~/assets/stylesheets/default.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/gtm.js', ssr: false },
    { src: '~/plugins/axios.js', ssr: false },
    { src: '~/plugins/routerOption', ssr: false },
    { src: '~/plugins/vue-tags-input', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    ['@nuxtjs/google-analytics', { id: 'GTM-sample' }],
    ['@nuxtjs/google-tag-manager', { id: 'GTM-sample', pageTracking: true }],
    '@nuxtjs/markdownit',
    '@nuxtjs/toast'
  ],
  buildModules: [
    [
      '@nuxt/typescript-build',
      {
        typeCheck: false
      }
    ]
  ],
  markdownit: {
    breaks: true,
    injected: true
  },
  toast: {
    position: 'top-right',
    duration: 5000
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    splitChunks: {
      layouts: true
    }
  }
}

export default config
