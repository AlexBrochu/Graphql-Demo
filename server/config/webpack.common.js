const paths = require("./paths");

const path = require("path");

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + "/index.ts"],
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, "node_modules")],
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  output: {
    filename: "[name].js",
    // filename: "[name].[contenthash].js", // cach busting
    path: paths.build,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
};
