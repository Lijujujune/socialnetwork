const router = require('express').Router();
const { getThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, removeReaction } = require('../../controllers/thoughtController');

router.route('/')
  .get(getThoughts)       // Get all thoughts
  .post(createThought);   // Create a new thought

router.route('/:thoughtId')
  .get(getThoughtById)    // Get a single thought by id
  .put(updateThought)     // Update a thought by id
  .delete(deleteThought); // Delete a thought by id

router.route('/:thoughtId/reactions')
  .post(addReaction);     // Add a reaction to a thought

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);  // Remove a reaction from a thought

module.exports = router;