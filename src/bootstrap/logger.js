/**
 * Author: Umayr Shahid <umayrr@hotmail.com>,
 * Created: 20:13, 20/07/15.
 */

'use strict';

var bunyan = require('bunyan');
var extend = require('extend');

var pkg = require('../../package.json');

var logger = null;
var defaults = {
  name: pkg.name,
  stream: process.stdout,
  serializers: bunyan.stdSerializers
};

function createLogger(options) {
  var _options = {};

  if (logger) {
    return logger;
  }

  _options = extend(_options, defaults, options);
  logger = new bunyan(_options);
  return logger;
}

module.exports = createLogger;
