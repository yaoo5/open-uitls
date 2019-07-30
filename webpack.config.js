/**
 * Created by YZL on 2019/7/30.^o^
 */

const path = require('path');

module.exports = {
  entry: './src/index.js',
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