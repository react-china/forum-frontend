'use strict';

var path = require('path');
var root_path = path.join(__dirname, '../../');
var node_modules_path = path.join(root_path, 'node_modules/');
var src_path = path.join(root_path, 'src/');

// ============ start SHIMMING MODULES start ============
// add your shim module here
// ============ end SHIMMING MODULES end ============

module.exports = {
  paths: {
    root: root_path,
    src: src_path,
    node_modules: node_modules_path
  },
  entries: {}
};
