const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './app.js'
  },
  output: {
    filename: '_build/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015-native-modules']
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true,
          }
        }
      })
    ]
  }
}