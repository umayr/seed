/**
 * Author: Umayr Shahid <umayrr@hotmail.com>,
 * Created: 20:46, 20/07/15.
 */

'use strict';

module.exports = {
  alive: alive
};

function alive(req, res) {
  res.send(201, {
    timestamp: Date.now()
  });
}
