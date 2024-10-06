const mongoose = require('mongoose');
const { User, Thought } = require('../models');  // Assuming your models are in a models folder
const { users, thoughts } = require('./data');

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://127.0.0.1:27017/socialnetworkDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Database connected');

    // Clear existing users and thoughts
    await User.deleteMany({});
    await Thought.deleteMany({});

    console.log('Existing data cleared');

    // Insert users
    const createdUsers = await User.insertMany(users);
    console.log('Users seeded');

    // Insert thoughts
    const createdThoughts = await Thought.insertMany(thoughts);
    console.log('Thoughts seeded');

    //Map friends to users
    for (let i = 0; i < createdUsers.length; i++) {
      const user = createdUsers[i];
    
      // Get all other users except the current user
      const otherUsers = createdUsers.filter((u) => u.username !== user.username);
    
      // Shuffle the otherUsers array
      const shuffledUsers = otherUsers.sort(() => 0.5 - Math.random());
    
      // Randomly select a number of friends (e.g., between 1 and 3)
      const numberOfFriends = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
      user.friends = shuffledUsers.slice(0, numberOfFriends).map((f) => f._id);
    
      await user.save();
    }
    
    console.log('Friends assigned to users');

    // Map thoughts to users
    for (let i = 0; i < createdThoughts.length; i++) {
      const thought = createdThoughts[i];
      const user = createdUsers.find((u) => u.username === thought.username);

      if (user) {
        user.thoughts.push(thought._id);
        await user.save();
      }
    }

    console.log('Thoughts assigned to users');

    process.exit(0);
  } catch (err) {
    console.error('Error seeding the database:', err);
    process.exit(1);
  }
};

seedDatabase();