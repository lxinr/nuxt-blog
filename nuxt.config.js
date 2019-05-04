const pkg = require('./package')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'universal',
  // 环境变量配置
  env: {
    nodeEnv: process.env.NODE_ENV
  },
  /*
  ** Headers of the page
  */
  head: {
    title: "Liux's Blog",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      { src: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/highlight.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/anchor-js/4.2.0/anchor.min.js' },
      { src: 'https://hm.baidu.com/hm.js?7a6dfff2bfc4fed2b06920f2e353e5cc' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900%7CRoboto+Mono:500' },
      { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/default.min.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#546E7A' },

  /*
  ** Global CSS
  */
  css: [
    '@mdi/font/css/materialdesignicons.css',
    '~/assets/style/main.scss',
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/axios',
    '@/plugins/ga'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: 'https://api.lxinr.com'
    // baseURL: 'http://127.0.0.1:3001'
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    '/blog/*': 'https://api.lxinr.com'
    // '/blog/*': 'http://127.0.0.1:3001'
  },
  router: {
    middleware: 'auth'
  },
  /*
  ** cache
  * https://zh.nuxtjs.org/api/configuration-cache
  */
  cache: {
    max: 150,
    maxAge: 1000 * 60 * 100
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (!ctx.isDev && ctx.isClient) {
        config.plugins.push(
          new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                warnings: false,
                drop_console: true
              }
            }
          })
        )
      }
    }
  }
}
