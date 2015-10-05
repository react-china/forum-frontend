const webpack = require('webpack');

module.exports = function makeClientDevelopmentConfig(config) {
  config.debug = true;
  config.displayErrorDetails = true;
  config.outputPathinfo = true;
  config.devtool = 'eval-source-map';
  config.entry.app.push(
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server'
  );

  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );

  config.module.loaders = config.module.loaders.map((loader) => {
    if (/js/.test(loader.test)) {
      loader.loaders.unshift('react-hot');
    }
    return loader;
  });

  return config;
};
