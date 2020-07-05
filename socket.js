const socket = require('socket.io');
const server = require('./server.js');

module.exports = socket(server);
