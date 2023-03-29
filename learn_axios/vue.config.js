const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
        target: "http://123.207.32.32:8080",
    },
    lintOnSave: false,
  },
})
