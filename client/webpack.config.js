const path = require("path");
const hwp = require("html-webpack-plugin");
module.exports = {
  entry: {
    index: path.join(__dirname, "src", "index.js"),
  },
  output: {
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new hwp({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
};
