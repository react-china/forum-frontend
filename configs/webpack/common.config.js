'use strict';

var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');

var dependencies = require('./dependencies.config');
var root_path = dependencies.paths.root;
var src_path = dependencies.paths.src;
var node_modules_path = dependencies.paths.node_modules;

module.exports = {
  context: root_path,
  entry: _.merge(dependencies.entries, {
    app: ['./src/index.js']
  }),
  output: {
    filename: '[name].bundle.js'
  },
  resolve: {
    root: [src_path],
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.scss', '.css', '.config.js'],
    alias: {}
  },
  module: {
    preLoaders: [],
    loaders: [
      // Next 2 lines expose jQuery and $ to any JavaScript files loaded after client-bundle.js
      // in the Rails Asset Pipeline. Thus, load this one prior.
      {test: require.resolve('jquery'), loader: 'expose?jQuery'},
      {test: require.resolve('jquery'), loader: 'expose?$'},
      {test: require.resolve('react'), loader: 'expose?React'}

      // AltJS
    ],
    noParse: []
  },
  plugins: []
};
