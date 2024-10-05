const { Types } = require('mongoose');

// Use ObjectId references for friends
const users = [
  {
    username: 'john_doe',
    email: 'john@example.com',
    thoughts: [],
    friends: [] // This will be populated later with ObjectId references
  },
  {
    username: 'jane_doe',
    email: 'jane@example.com',
    thoughts: [],
    friends: [] // This will be populated later with ObjectId references
  },
  {
    username: 'sam_smith',
    email: 'sam@example.com',
    thoughts: [],
    friends: [] // This will be populated later with ObjectId references
  },
  {
    username: 'sarawong',
    email: 'saraw@example.com',
    thoughts: [],
    friends: [] // This will be populated later with ObjectId references
  },
  {
    username: 'amykim',
    email: 'amykim@sample.com',
    thoughts: [],
    friends: [] // This will be populated later with ObjectId references
  },
];

const thoughts = [
  {
    thoughtText: 'This is my first thought!',
    username: 'john_doe',
    reactions: [
      {
        reactionBody: 'Nice thought!',
        username: 'amykim',
      }
    ]
  },
  {
    thoughtText: 'Loving this social network API!',
    username: 'sam_smith',
    reactions: [
      {
        reactionBody: 'Totally agree!',
        username: 'john_doe',
      }
    ]
  },
  {
    thoughtText: 'Great work buddy!',
    username: 'sarawong',
    reactions: [
      {
        reactionBody: 'Can’t agree more!',
        username: 'amykim',
      }
    ]
  },
];

module.exports = { users, thoughts };
