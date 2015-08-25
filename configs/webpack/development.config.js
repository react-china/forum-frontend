// webpack -w --config './configs/webpack/development.config.js' & npm start
'use strict';

var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var config = require('./common.config');

config = _.merge(config, {
  debug: true,
  displayErrorDetails: true,
  outputPathinfo: true,
  devtool: 'eval-source-map'
});

config.entry.app.push(
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/dev-server'
);

config.entry.vendor = [
  'jquery',
  'react'
];

config.output = _.merge(config.output, {
  publicPath: '/assets/',
  path: path.join(__dirname, '../../build/'),
  devtoolModuleFilenameTemplate: '[resourcePath]',
  devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
});

config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);

config.module.preLoaders.push(

);

// All the styling loaders only apply to hot-reload, not rails
config.module.loaders.push(
  {test: /\.css$/, loader: 'style-loader!css-loader'},
  {test: /\.scss$/, loader: 'style!css!sass'},
  // The url-loader uses DataUrls. The file-loader emits files.
  {test: /\.woff$/, loader: 'url-loader?limit=10000&minetype=application/font-woff'},
  {test: /\.woff2$/, loader: 'url-loader?limit=10000&minetype=application/font-woff'},
  {test: /\.ttf$/, loader: 'file-loader'},
  {test: /\.eot$/, loader: 'file-loader'},
  {test: /\.svg$/, loader: 'file-loader'},

  // React.js JSX
  {test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/}
);

module.exports = config;
