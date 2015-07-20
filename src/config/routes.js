/**
 * Author: Umayr Shahid <umayrr@hotmail.com>,
 * Created: 20:31, 20/07/15.
 */

'use strict';

var utils = require('../utils');
var controllers = utils.requireAll(__dirname, '../controllers');

function registerRoutes(server) {
  server.get('/alive', controllers['test'].alive);
}

module.exports = registerRoutes;
