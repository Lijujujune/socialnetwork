const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  // Get a single user by ID
  getUserById(req, res) {
    User.findById(req.params.userId) // Use userId instead of id
      .populate('thoughts friends')
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: 'No user found with this ID' });
        }
        res.json(user);
      })
      .catch((err) => res.status(500).json(err));
  },

  // Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.status(201).json(user))
      .catch((err) => res.status(500).json(err));
  },

  // Update a user by ID
  updateUser(req, res) {
    User.findByIdAndUpdate(req.params.userId, req.body, { new: true, runValidators: true }) 
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: 'No user found with this ID' });
        }
        res.json(user);
      })
      .catch((err) => res.status(500).json(err));
  },

// Delete a user by ID
deleteUser(req, res) {
  User.findByIdAndDelete(req.params.userId)
    .then(async (user) => {
      if (!user) {
        return res.status(404).json({ message: 'No user found with this ID' });
      }

      // Delete associated thoughts by username
      const result = await Thought.deleteMany({ username: user.username });
      if (result.deletedCount === 0) {
        console.log('No thoughts found for this user.');
      } else {
        console.log(`${result.deletedCount} thoughts deleted.`);
      }

      res.json({ message: 'User and associated thoughts successfully deleted' });
    })
    .catch((err) => {
      console.error('Error deleting user:', err);
      res.status(500).json(err);
    });
},

  // Add a friend
  addFriend(req, res) {
    User.findByIdAndUpdate(
      req.params.userId,
      { $addToSet: { friends: req.params.friendId } }, // Use $addToSet to prevent duplicates
      { new: true }
    )
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: 'No user found with this ID' });
        }
        res.json(user);
      })
      .catch((err) => res.status(500).json(err));
  },

  // Remove a friend
  removeFriend(req, res) {
    User.findByIdAndUpdate(
      req.params.userId,
      { $pull: { friends: req.params.friendId } }, 
      { new: true }
    )
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: 'No user found with this ID' });
        }
        res.json(user);
      })
      .catch((err) => res.status(500).json(err));
  },
};