const webpack = require('webpack');
const path = require('path');
const WhtPlugin = require('./src/index.js');

module.exports = {
  context: path.resolve(),
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]_[contenthash:8].js'
  },
  watchOptions: {
    // 不监听的 node_modules 目录下的文件
    ignored: /node_modules/
  },
  module: {
  },
  plugins: [
    new WhtPlugin()
  ],
  devtool: false
};
