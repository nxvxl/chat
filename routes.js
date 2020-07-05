const express = require('express');
const io = require('./socket.js');
const Message = require('./model.js');

const router = express.Router();

router
  .route('/messages')
  .get(async (req, res) => {
    const messages = await Message.find({ room: req.query.room });
    res.json({ messages });
  })
  .post(async (req, res, next) => {
    try {
      const message = await Message.create(req.body);
      io.to(message.room).emit('message', message);
      res.json({ message });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
