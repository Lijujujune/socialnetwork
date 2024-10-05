const { User } = require('../models');

// Aggregate function to get the number of students overall
module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getUserById(req, res) {
    User.findById(req.params.id)
      .populate('thoughts friends')
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Other user-related functions like updateUser, deleteUser, addFriend, removeFriend...
};
