
module.exports = {
  entry: {
    app: [__dirname + '/src/index'],
    vendor: [
      'redux',
      'react-redux',
      'react-router',
      'react-router-redux'
    ],
    react: [
      'react',
      'react-dom'
    ],
    lodash: 'lodash',
    common: [
      'bluebird',
    ]
  },
  resolve: {
    root: [
      __dirname + '/src',
      __dirname + '/node_modules',
      __dirname,
    ],
    extensions: ['', '.js'],
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel'],
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: ['style', 'css?importLoaders=1', {
        loader: 'postcss',
        options: {
          plugings: () => {
            return [
              require('precss'),
              require('autoprefixer')
            ];
          }
        },
      }],
      include: /components/,
    }, {
      test: /\.scss$/,
      use: ['style', 'css?importLoaders=1', 'sass', {
        loader: 'postcss',
        options: {
          plugings: () => {
            return [
              require('precss'),
              require('autoprefixer')
            ];
          }
        },
      }],
      include: /components/,
    }, {
      test: /\.(jpe?g|png|gif|svg|ico)/i,
      use: 'file?name=img_[hash:8].[ext]',
    }, {
      test: /\.(ttf|eot|woff|woff2)/,
      use: 'file',
    }, {
      test: /\.(pdf)/,
      use: 'file',
    }, {
      test: /\.(swf|xap)/,
      use: 'file',
    },{
      test: /\.json/,
      use: 'json',
    }],
  },
};
