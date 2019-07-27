// webpack.config.js
const path = require('path');

module.exports = {
  entry: {
    utils: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    libraryTarget: 'umd', // 组件采用UMD格式打包
    library: 'WebUtils',
  },

  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
};