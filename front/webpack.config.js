const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (_, args) {
  const mode = args.mode || "production";
  return {
    mode: mode,
    entry: {
      angular: "angular",
      angularRoute: "angular-route",
      vendors: "./src/vendors",
      main: {
        import: "./src/main.js",
      },
    },
    output: {
      clean: true,
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    devtool: mode === "development" ? "source-map" : false,
    plugins: [
      new webpack.DefinePlugin({
        isProd: mode === "production",
      }),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        scriptLoading: "blocking",
      }),
      new CopyPlugin({
        patterns: [{ from: "src/assets", to: "assets" }],
      }),
      new MiniCssExtractPlugin({
        filename: "[name].style.css",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
      compress: false,
      port: 9000,
      historyApiFallback: true,
      proxy: {
        "/api/articles": "http://localhost:3000",
      },
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
};
