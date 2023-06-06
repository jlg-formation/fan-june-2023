const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function (_, args) {
  const mode = args.mode || "production";
  return {
    mode: mode,
    entry: "./src/main.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    devtool: mode === "development" ? "source-map" : false,
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
  };
};
