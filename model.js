const { Schema, model } = require('mongoose');

const MessageSchema = Schema({
  username: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('Message', MessageSchema);
