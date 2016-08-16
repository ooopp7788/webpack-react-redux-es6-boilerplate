var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

// 辅助工具
var utils = require('./utils');
var fullPath = utils.fullPath;
var pickFiles = utils.pickFiles;

// 项目根路径
var ROOT_PATH = fullPath('../');
// 项目源码路径
var SRC_PATH = ROOT_PATH + '/src';
// 产出路径
var DIST_PATH = ROOT_PATH + '/dist';

// 是否是开发环境
var __DEV__ = process.env.NODE_ENV !== 'production';

// conf
var alias = pickFiles({
  id: /(conf\/[^\/]+).js$/,
  pattern: SRC_PATH + '/conf/*.js'
});

// components
alias = Object.assign(alias, pickFiles({
  id: /(components\/[^\/]+)/,
  pattern: SRC_PATH + '/components/*/index.js'
}));

// reducers
// alias = Object.assign(alias, pickFiles({
//   id: /(reducers\/[^\/]+).js/,
//   pattern: SRC_PATH + '/js/reducers/*'
// }));

// actions
// alias = Object.assign(alias, pickFiles({
//   id: /(actions\/[^\/]+).js/
// }));

var config = {
  context: SRC_PATH,
  entry: {
    app: ['./pages/app.js']
  },
  output: {
    path: DIST_PATH,
    filename: 'js/bundle.js'
  },
  module: {},
  resolve: {
    alias: alias
  },
  plugins: [
    new webpack.DefinePlugin({
      // http://stackoverflow.com/questions/30030031/passing-environment-dependent-variables-in-webpack
      "process.env.NODE_ENV": JSON.stringfy(process.env.NODE_ENV || 'development')
    }),
    new HtmlwebpackPlugin({
      filename: 'index.html',
      chunks: ['app'],
      template: SRC_PATH + '/pages/app.html'
    }),
    new webpack.optimize.CommonsChunkPlugin('lib', 'js/common.js')
  ]
}

// 使用缓存
var CACHE_PATH = ROOT_PATH;
// loaders
config.module.loaders = [];

// 使用 babel 编译jsx、es6
config.module.loaders.push({
  test: '/\.js$/',
  exclude: '/node_modules/',
  include: SRC_PATH,
  // 这里使用 loaders ，因为后面还需要添加 loader
  loaders: ['babel?cacheDirectory=' + CACHE_PATH]
});
// 编译 sass
config.module.loaders.push({
  test: /\.(scss|css)$/,
  loaders: ['style', 'css', 'sass']
});
config.entry.lib = [
  'react', 'react-dom', 'react-router',
  'redux', 'react-redux', 'redux-thunk'
];
config.output.filename = 'js/[name].js';

module.exports = config;
