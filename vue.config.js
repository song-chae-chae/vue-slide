const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        // options here will be passed to css-loader
        additionalData: `@import "@/assets/styles/vs-common.scss";`,
      },
    },
  },
});
