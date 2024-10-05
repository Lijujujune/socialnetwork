const { Schema, model } = require('mongoose');

// Schema to create user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true, // Use "trim" instead of "trimmed"
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId, // Use Schema.Types.ObjectId directly
        ref: 'Thought', // References Thought model
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId, // Use Schema.Types.ObjectId directly
        ref: 'User', // Self-reference to User model
      },
    ],
  },
  {
    toJSON: {
      virtuals: true, // Enable virtuals in toJSON
    },
    id: false, // Prevent automatic creation of id field
  }
);

// Virtual to get the count of friends
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;