/**
 * Created by YZL on 2019/7/30.^o^
 */

const path = require('path');
import "babel-polyfill"

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: 'utils.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};