/**
 * Author: Umayr Shahid <umayrr@hotmail.com>,
 * Created: 20:13, 20/07/15.
 */

'use strict';

var path = require('path');
var fs = require('fs');

module.exports = {
  requireAll: requireAll,
  clone: clone,
  toBase64: toBase64,
  fromBase64: fromBase64
};

/**
 * Utility to require all the files in the given directory.
 *
 * @param {string} currentDir - Current Directory normally `__dirname`.
 * @param {string} directory - Directory to require files from. (Relative to current directory).
 * @returns {Array}
 */
function requireAll(currentDir, directory) {
  var required = [];
  var normalizedPath = path.join(currentDir, directory);

  fs.readdirSync(normalizedPath).forEach(function (file) {
    var relativePath = path.relative(__dirname, normalizedPath);
    required[file.toString().split('.')[0]] = require(relativePath + '/' + file);
  });

  return required;
}

/**
 * Clones an object, nice and easy.
 *
 * @param obj
 * @returns {*}
 */
function clone(obj) {
  var copy;

  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  if (obj instanceof Array) {
    copy = [];
    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = clone(obj[i]);
    }
    return copy;
  }

  if (obj instanceof Object) {
    copy = {};
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = clone(obj[attr]);
      }
    }
    return copy;
  }

  throw new Error('Unable to clone object. Its type isn\'t supported.');
}

/**
 * Encodes any given string to BASE64.
 *
 * @param str
 * @returns {String}
 */
function fromBase64(str) {
  return (new Buffer(str || '', 'base64')).toString('ascii');
}

/**
 * Decodes a BASE64 string.
 *
 * @param str
 * @returns {String}
 */
function toBase64(str) {
  return (new Buffer(str || '', 'ascii')).toString('base64');
}
