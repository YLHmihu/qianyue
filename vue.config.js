const path = require("path");
module.exports = {
  productionSourceMap: false, // 不要打包后的.map文件
  chainWebpack (config) {
    // 移除 preload 插件
    config.plugins.delete("preload");
    // 移除 prefetch 插件
    config.plugins.delete("prefetch");
    //config.plugins.delete('preload-${name}')//可配置移除预加载的页面。eg:login.html则添加config.plugins.delete('preload-login'),
  },
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      modules: ["./components", "node_modules"],
      alias: {
        "@": path.join(__dirname, "src"),
        views: path.join(__dirname, "src/views"),
        components: path.join(__dirname, "src/components"),
        assets: path.join(__dirname, "src/assets"),
        api: path.join(__dirname, "src/api"),
        utils: path.join(__dirname, "src/utils"),
        mixins: path.join(__dirname, "src/mixins"),
      },
    },
    // externals: {
    //   vue: "Vue",
    //   axios: "axios",
    //   "vue-router": "VueRouter",
    //   vuex: "Vuex"
    // }
  },
  // 利用公共CDN服务加载包

  devServer: {
    disableHostCheck: true,
    proxy: {
      "/": {
        target: "http://proxy.ts-paas.epay",
        // target: "http://172.29.40.213:10612",
        ws: false,
        // 将主机标头的原点更改为目标URL(设置跨域)
        changeOrigin: true,
      },
    },
  },
};
