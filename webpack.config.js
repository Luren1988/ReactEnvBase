const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 
const publidDir = path.join(__dirname, '/public');
module.exports = [
  {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
      path: publidDir,
      filename: "bundle.js",
      
    },
    devServer: {
      contentBase: "./public",
      compress: true,
      hot: true,
      host: "localhost",
      port: 3000,
      publicPath: "/"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [{ loader: "ts-loader" }]
        }
      ]
    }
  },
  {
    mode: "development",
    entry: {
      style: "./stylesheets/index.scss",
    },
    output: {
      path: publidDir,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin({ filename: "bundle.css" })],
  },
]