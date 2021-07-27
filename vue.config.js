module.exports = {
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
