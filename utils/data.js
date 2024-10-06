const { Types } = require('mongoose');

// Use ObjectId references for friends
const users = [
  {
    username: 'john_doe',
    email: 'john@example.com',
    thoughts: [],
    friends: []
  },
  {
    username: 'jane_doe',
    email: 'jane@example.com',
    thoughts: [],
    friends: [] 
  },
  {
    username: 'sam_smith',
    email: 'sam@example.com',
    thoughts: [],
    friends: [] 
  },
  {
    username: 'sarawong',
    email: 'saraw@example.com',
    thoughts: [],
    friends: [] 
  },
  {
    username: 'amykim',
    email: 'amykim@sample.com',
    thoughts: [],
    friends: [] 
  },
];

const thoughts = [
  {
    thoughtText: 'I think this is pretty cool!',
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
