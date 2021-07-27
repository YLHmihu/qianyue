module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "unicom-mobile",
        libraryDirectory: "lib",
      },
      "unicom-mobile",
    ],
  ],
};
