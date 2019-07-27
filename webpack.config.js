/**
 * Created by YZL on 2019/7/27.^o^
 */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'light-utils.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  }
};