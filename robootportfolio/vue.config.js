const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../docs',
  publicPath: './',
  pages: {
    index: {
      entry: "src/main.js",
      title: "Roboot Portfolio",
    }
  },
})
