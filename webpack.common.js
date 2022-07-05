const path = require("path");

module.exports = {
  entry: { main: "./src/index.js" },
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
            name: "[name].[ext]",
            outputPath: "img",
          },
        },
      },
    ],
  },
};
