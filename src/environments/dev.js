/**
 * Author: Umayr Shahid <umayrr@hotmail.com>,
 * Created: 20:13, 20/07/15.
 */

'use strict';

module.exports = {
  db: {
    host: '',
    name: '',
    user: '',
    password: ''
  },
  secret: 'THISISASTRINGTHATTRIESTOBEVERYLONGANDRANDOMBUTITFAILS',
  port: process.env['PORT'] || 3010,
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['X-Requested-With', 'content-type', 'Token'],
    maxAge: 3600
  }
};
