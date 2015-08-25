// webpack -w --config ./configs/webpack/production.config.js
'use strict';

var _ = require('lodash');
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var config = require('./common.config');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

config = _.merge(config, {
  debug: false,
  devtool: false
});

config.output = _.merge(config.output, {
  path: path.join(__dirname, '../../build/'),
  filename: '[name].[chunkhash].js'
});

// load jQuery from cdn or rails asset pipeline
config.externals = {
  jquery: 'var jQuery',
  react: 'var React'
};

config.module.loaders.push(
  // React.js JSX
  {test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/}
);

config.plugins.push(
  function () {
    return this.plugin('done', function (stats) {
      var content = JSON.stringify(stats.toJson().assetsByChunkName, null, 2);
      return fs.writeFileSync('build/assets.json', content);
    })
  }
);

module.exports = config;

// Next line is Heroku specific. You'll have BUILDPACK_URL defined for your Heroku install.
var devBuild = (process.env.BUILDPACK_URL === 'undefined');
if (devBuild) {
  console.log('Webpack development build'); // eslint-disable-line no-console
  module.exports.devtool = 'eval-source-map';
} else {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({sourceMap: false})
  );
  console.log('Webpack production build'); // eslint-disable-line no-console
}
