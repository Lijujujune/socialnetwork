const { Schema } = require('mongoose');

// Schema to create a reaction model
const reactionSchema = new Schema(
  {
    // Reaction body text
    reactionBody: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleString(), // Getter to format timestamp
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true, // Enable getters on toJSON
    },
    id: false, // Prevent the automatic creation of an id field
  }
);

module.exports = reactionSchema;