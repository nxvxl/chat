require('dotenv').config();
require('./db.js');

const express = require('express');
const cors = require('cors');
const server = require('./server.js');
const io = require('./socket.js');
const app = require('./app.js');
const router = require('./routes.js');

const PORT = process.env.PORT;

/** middleware */
app.use(cors());
app.use(express.json());
app.use('/api', router);

/** Serve vue build */
app.use(express.static('./dist'));

/** error handler */
app.use((err, req, res, next) => {
  console.log(err);
  res.json({ error: err.message });
});

io.on('connection', (client) => {
  console.log('connect');
  /** assign client to room */
  client.on('join', (room) => {
    client.join(room);
  });
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
