module.exports = {
  publicPath: "./",
  outputDir: "docs",
  productionSourceMap: false,
  configureWebpack: {
    // 以下库使用cdn，不会被打包
    externals: process.env.NODE_ENV === 'production' ? {
      "vue": "Vue",
      "vue-router": 'VueRouter',
      "vuex": "Vuex",
      "quill": "Quill",
      "vue-quill-editor": "VueQuillEditor",
      "vuedraggable": "vuedraggable"
    } : {}
  },
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))
  },
  devServer: {
    port: 9000
  }
};