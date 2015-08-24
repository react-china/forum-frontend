const gulp = require('gulp');
const eslint = require('gulp-eslint');
const webpack = require('webpack');
const clean = require('gulp-clean');
const gutil = require('gulp-util');
const WebpackDevServer = require('webpack-dev-server');

gulp.task('clean', function () {
  return gulp.src('build', {
    read: false
  }).pipe(clean());
});

// Note: To have the process exit with an error code (1) on
//  lint error, return the stream and pipe to failOnError last.
gulp.task('lint', function gulpLint() {
  return gulp.src(['src/**/*.jsx', 'src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('dev', ['clean', 'webpack:dev'], function () {
  gulp.watch(['src/**/*'], ['webpack:build-dev']);
});

gulp.task('build', ['clean', 'webpack:build']);

gulp.task('webpack:dev', function (callback) {
  var webpackConfig = require('./configs/webpack/development.config');
  webpack(Object.create(webpackConfig)).run(function (err, stats) {
    if (err) throw new gutil.PluginError('webpack:dev', err);
    gutil.log('[webpack:dev]', stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('webpack:build', function (callback) {
  var webpackConfig = Object.create(require('./configs/webpack/production.config'));
  webpack(webpackConfig, function (err, stats) {
    if (err) throw new gutil.PluginError('webpack:build', err);
    gutil.log('[webpack:build]', stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('default', ['lint'], function gulpDefault() {
  // This will only run if the lint task is successful...
});
