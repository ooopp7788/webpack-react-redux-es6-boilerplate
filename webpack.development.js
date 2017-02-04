var webpack = require('webpack');
var merge = require('@ersinfotech/merge');
var webpackConfig = require('./webpack.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = merge(webpackConfig, {
  devtool: 'eval',
  debug: true,
  entry: {
    app: ['webpack-hot-middleware/client'],
  },
  output: {
    path: __dirname + '/_dist/pc/',
    filename: '[name]_[hash:8].js',
    chunkFilename: '[name]_[chunkhash:8].js',
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css'],
      exclude: /components/,
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      favicon: __dirname + '/src/favicon.ico',
      inject: false,
    }),
  ],
});
