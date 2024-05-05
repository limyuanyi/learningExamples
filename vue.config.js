const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  lintOnSave:false,
  //webpack 代理服務器
  devServer: {
    proxy: {
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn',
        //pathRewrite: { '^/api':''},
      }
    }
  }
}