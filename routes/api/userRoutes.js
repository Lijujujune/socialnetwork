const router = require('express').Router();
const { getUsers, getUserById, createUser, updateUser, deleteUser, addFriend, removeFriend } = require('../../controllers/userController');

// /api/users
router.route('/')
  .get(getUsers)         // Get all users
  .post(createUser);      // Create a new user

// /api/users/:id
router.route('/:userid')
  .get(getUserById)       // Get a single user by id
  .put(updateUser)        // Update a user by id
  .delete(deleteUser);    // Delete a user by id

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
  .post(addFriend)        // Add a friend
  .delete(removeFriend);  // Remove a friend

module.exports = router;