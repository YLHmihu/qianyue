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

  devServer: {
    disableHostCheck: true,
    proxy: {
      "/": {
        target: "http://proxy.ts-paas.epay/",
        ws: false,
        changeOrigin: true,
      },
    },
  },
};
