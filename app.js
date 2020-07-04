/** import all environment variables from .env file */
require('dotenv').config();

/** import 3rd party library */
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const socket = require('socket.io');

const Message = require('./model');

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/** create express object  */
const app = express();
const server = http.createServer(app);
const io = socket(server);

io.origins('*:*');

io.on('connection', (client) => {
  /** assign client to room */
  client.on('join', (room) => {
    client.join(room);
  });
});

/** middleware */
app.use(cors());
app.use(express.json());

/** Serve vue build */
app.use(express.static('./dist'));

/** API endpoint to get all messages by room */
app.get('/messages', async (req, res) => {
  const messages = await Message.find({ room: req.query.room });
  res.json({ messages });
});

/** Insert and emit new message */
app.post('/messages', async (req, res, next) => {
  try {
    const message = await Message.create(req.body);
    io.to(message.room).emit('message', message);
    res.json({ message });
  } catch (error) {
    next(error);
  }
});

/** error handler */
app.use((err, req, res, next) => {
  res.json({ error: err.message });
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
