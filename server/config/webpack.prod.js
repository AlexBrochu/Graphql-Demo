const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "source-map",
  externals: [nodeExternals({})],
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        PORT: 4000,
      },
    }),
  ],
});
