const { Schema, Types } = require('mongoose');


const reactionSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toLocaleString(),
  },
  username: {
    type: String,
    required: true,
  },
  // Embedding the Reaction schema as an array of subdocuments
  reactions: [reactionSchema],
},

{
  toJSON: {
    getters: true,
  },
  id: false,
}
);

module.exports = reactionSchema;