const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const publidDir = path.join(__dirname, '/public');

const src = path.resolve(__dirname, 'src');
console.log("----------")
console.log(src)
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
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        'src': src,
        'components': `${src}/components`,
        'atoms': `${src}/components/atoms`,
        'molecules': `${src}/components/molecules`,
        'organisms': `${src}/components/organisms`,
        'templates': `${src}/components/templates`,
        'pages': `${src}/components/pages`,
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [{ loader: "ts-loader" }]
        },
        {
          test: /\.scss|.css?$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { url: false, sourceMap: true }
            },
            { loader: 'postcss-loader', options: { sourceMap: true } },
            'sass-loader',
            { loader: 'sass-loader', options: { sourceMap: true } },

          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css?[hash]'
      })
    ]

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