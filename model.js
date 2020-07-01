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
});

module.exports = model('Message', MessageSchema);
