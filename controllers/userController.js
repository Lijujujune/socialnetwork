const { User } = require('../models');

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .populate('thoughts friends') // Populate thoughts and friends
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
      .then((user) => res.status(201).json(user)) // Return 201 for created resource
      .catch((err) => res.status(500).json(err));
  },

  // Update a user by ID
  updateUser(req, res) {
    User.findByIdAndUpdate(req.params.userId, req.body, { new: true, runValidators: true }) // Ensure runValidators is true
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
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: 'No user found with this ID' });
        }
        res.json({ message: 'User successfully deleted' });
      })
      .catch((err) => res.status(500).json(err));
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
      { $pull: { friends: req.params.friendId } }, // Use $pull to remove friend
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