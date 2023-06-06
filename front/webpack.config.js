const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (_, args) {
  const mode = args.mode || "production";
  return {
    mode: mode,
    entry: "./src/main.js",
    output: {
      clean: true,
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    devtool: mode === "development" ? "source-map" : false,
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new CopyPlugin({
        patterns: [{ from: "src/assets", to: "assets" }],
      }),
      new MiniCssExtractPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      compress: true,
      port: 9000,
      historyApiFallback: true,
      proxy: {
        "/articles": "http://localhost:3000",
      },
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
};
