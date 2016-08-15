var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
//   cache: true,
//   debug: true,

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    // watchOptions: { aggregateTimeout: 300, poll: 1000 },
    stats: 'minimal'
  }

//   node: {
//     global: 1,
//     crypto: 'empty',
//     module: 0,
//     Buffer: 0,
//     clearImmediate: 0,
//     setImmediate: 0
//   }
});