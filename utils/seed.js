const mongoose = require('mongoose');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./data');

mongoose.connect('mongodb://127.0.0.1:27017/socialnetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
  seedDatabase(); // Call the seed function after a successful connection
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});
    console.log('Existing data cleared');

    // Insert users
    const createdUsers = await User.insertMany(users);
    console.log(`${createdUsers.length} users seeded`);

    // Insert thoughts
    const createdThoughts = await Thought.insertMany(thoughts);
    console.log(`${createdThoughts.length} thoughts seeded`);

    // Map thoughts to users
    for (let thought of createdThoughts) {
      const user = createdUsers.find((u) => u.username === thought.username);
      if (user) {
        user.thoughts.push(thought._id);
        await user.save();
      }
    }

    console.log('Thoughts assigned to users');
    process.exit(0); // Exit process after seeding is complete
  } catch (err) {
    console.error('Error seeding the database:', err);
    process.exit(1);
  }
};
