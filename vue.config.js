const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
      alias: { // 路径别名(简写方式)
        // 'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
      }
    }
  },
  devServer: { 
    proxy: {
      '/api':{
        target:'http://localhost:4000',
        pathRewrite:{
          '^/api':''
        },
        changeOrigin: true,
        secure:false
      },
    }
  }
}