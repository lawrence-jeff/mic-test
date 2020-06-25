const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"]
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  entry: "./index.js",
  output: { path: __dirname, filename: "bundle-[hash].js" },
  devtool: "source-map",
  devServer: { host: "0.0.0.0", disableHostCheck: true, https: true },
  plugins: [
    new HtmlWebpackPlugin({
      title: "mic test",
      meta: {
        viewport: "width=device-width, initial-scale=1"
      }
    })
  ]
};
