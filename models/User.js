const { Schema, model } = require('mongoose');
const Thought = require('./thought');


// Schema to create user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    thoughts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought',  // References Thought model
      },
    ],
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Self-reference to User model
      },
    ],
  });
  
  // Virtual to get the count of friends
  userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });
  
const User = model('User', userSchema);

module.exports = User;
