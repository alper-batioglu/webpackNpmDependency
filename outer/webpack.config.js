const path = require('path');
const WebpackBar = require('webpackbar');

module.exports = {
  entry: './index.js',
  devtool: 'source-map',
  mode: 'development',
  watch: false,
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules|vue\/src/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }],
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },
  plugins: [new WebpackBar()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {mylibrary: path.resolve(__dirname, "node_modules/mylibrary")}
  },
  output: {
    filename: 'outer.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'outer',
    globalObject: 'this'
  }
};