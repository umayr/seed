/**
 * Author: Umayr Shahid <umayrr@hotmail.com>,
 * Created: 20:28, 20/07/15.
 */

'use strict';

var restify = require('restify');

var pkg = require('../../package.json');
var logger = require('./logger')();

var server = null;

function createServer(/*config*/) {
  if (server) {
    return server;
  }
  server = restify.createServer({
    name: pkg.name,
    version: pkg.version,
    log: logger
  });

  return server;
}

module.exports = createServer;
