const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir: 'docs',
  productionSourceMap: false,
  configureWebpack: {
    // 以下库使用cdn，不会被打包
    externals:
      process.env.NODE_ENV === 'production'
        ? {
            vue: 'Vue',
            'vue-router': 'VueRouter',
            vuex: 'Vuex',
            quill: 'Quill',
            'vue-quill-editor': 'VueQuillEditor',
            vuedraggable: 'vuedraggable',
            compressorjs: 'Compressor',
            'element-ui': 'ELEMENT'
          }
        : {},
  },
  devServer: {
    port: 9000,
  },
});
