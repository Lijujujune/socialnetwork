const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },

    createdAt: {
      type: Date,
      default: Date.now,  // Set default value to current timestamp
      get: (timestamp) => new Date(timestamp).toLocaleString(),  // Getter to format timestamp
    },

    username: {
      type:  String,
      required: true
    },
    // Array of nested documents using the reactionSchema
    reactions: [reactionSchema],
    });

    thoughtSchema.virtual('reactionCount').get(function() {
      return this.reactions.length;
    });
    
    // Ensure getters and virtuals are applied when converting the document to JSON or Object
    thoughtSchema.set('toJSON', { getters: true, virtuals: true });
    thoughtSchema.set('toObject', { getters: true, virtuals: true });
    
    const Thought = model('Thought', thoughtSchema);

    module.exports = Thought;
