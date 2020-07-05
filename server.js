const http = require('http');
const app = require('./app.js');

module.exports = http.createServer(app);
