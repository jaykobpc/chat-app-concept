const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "~@/scss/main.scss";
          `,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Chat App";
      return args;
    });
  },
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
});
