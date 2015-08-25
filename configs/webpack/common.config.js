const assign = require('object-assign');
const webpack = require('webpack');
const env = require('../environments');

const HtmlWebpackPlugin = require('html-webpack-plugin');

function makeDefaultConfig() {
  return {
    entry: {
      app: [env.inSrc('index')],
      vendor: env.VENDOR_DEPENDENCIES
    },
    output: {
      filename: '[name].[hash].js',
      path: env.inDist(''),
      publicPath: '/'
    },
    target: 'web',
    resolve: {
      root: [env.inSrc],
      modulesDirectories: ['node_modules'],
      extensions: ['', '.js', '.jsx'],
      alias: {}
    },
    module: {
      preLoaders: [
        {test: /\.(js|jsx)$/, loaders: ['eslint-loader'], include: env.inProject(env.SRC_DIRNAME)}
      ],
      loaders: [
        {test: /\.(js|jsx)$/, include: env.inProject(env.SRC_DIRNAME), loaders: ['babel?optional[]=runtime&stage=0']},
        {
          test: /\.scss$/,
          loaders: [
            'style-loader',
            'css-loader',
            'autoprefixer?browsers=last 2 version',
            'sass-loader?includePaths[]=' + env.inSrc('stylesheets')
          ]
        }
      ]
    },
    eslint: {configFile: env.inProject('.eslintrc'), failOnError: env.__PROD__},
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(env.NODE_ENV)
        },
        '__DEBUG__': env.__DEBUG__,
        '__DEV__': env.__DEV__,
        '__PROD__': env.__PROD__
      }),
      new HtmlWebpackPlugin({
        template: env.inSrc('index.html'),
        hash: true,
        filename: 'index.html',
        minify: env.__PROD__,
        inject: 'body'
      })
    ]
  };
}

module.exports = function makeConfig(configModifier) {
  return assign({}, makeDefaultConfig(), configModifier);
};

