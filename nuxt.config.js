const marked = require('marked')
const renderer = new marked.Renderer()

const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: "付刚",
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: './favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: false,

  /*
   ** Global CSS
   */
  css: [
    '~/assets/styles/highlight.min.css',
    '~/assets/styles/bootstrap-flatly.min.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    'bootstrap-vue/nuxt'
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: [
          { loader: 'html-loader' },
          { loader: 'highlight-loader', options: { renderer } },
          { loader: 'markdown-loader', options: { renderer } }
        ]
      })
    },
  },
  router: {
    base: '/study/my-git-desktop/nuxt-test/dist/'//发布到本地iis
    //base: '/nuxt-test/'//发布到https://sharealex.top/nuxt-test
  }
}
