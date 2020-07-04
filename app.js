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

/** middleware */
app.use(cors());
app.use(express.json());

app.use(express.static('./client/dist'));

app.get('/hello', (req, res) => {
  res.json({
    message: 'hello world',
  });
});

app.get('/messages', async (req, res) => {
  const messages = await Message.find();
  res.json({ messages });
});

app.post('/messages', async (req, res, next) => {
  try {
    const message = await Message.create(req.body);
    res.json({ message });
  } catch (error) {
    next(error);
  }
});

/** error handler */
app.use((err, req, res, next) => {
  res.json({ err });
});

const server = http.createServer(app);
const io = socket(server);

io.set('origins', '*:*');
io.origins('*:*');

io.on('connection', (client) => {
  client.send('hello stranger');
  client.on('join', (room) => {
    client.join(room);
    console.log(room);
  });
  client.on('message', (message) => {
    io.to('room test').emit('message', message);
  });
  client.on('disconnect', () => {
    console.log('disconnect');
  });
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
