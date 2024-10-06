# Social Network

## Table of Contents
	•	Description
	•	Installation
	•	Usage
	•	API Routes
	•	Technologies
 	•	License
	•	Contacts

 # Description

The Social Network API is a back-end application that provides the essential functionality for a social network platform. Users can sign up, create thoughts (similar to posts), react to friends’ thoughts, and manage a list of friends. The API is built using Node.js and Express.js to handle the server-side operations, with MongoDB as the database to store user information, thoughts, and reactions. The Mongoose ODM is used for seamless data interaction with MongoDB. The API supports basic CRUD operations for users, thoughts, and reactions, making it a core backend for a social networking application.

Github Repo: https://github.com/Lijujujune/socialnetwork
Walkthrough video: https://bootcampspot.instructuremedia.com/embed/52e5611f-1bfc-401a-a881-efc9185a7841

 ## Installation
 
  1.  Clone the repository:
      git clone https://github.com/your-username/social-network-api.git
      
  2.  Install the dependencies:
      npm i

  3.  Seed the database
      npm run seed

  4.  Start the server:
      npm start/nodemon index

## Usage

This API can be tested via tools like Insomnia or Postman. Below are examples of how to use the API.

### Users

	•	GET /api/users: Get all users
	•	GET /api/users/:userId: Get a single user by ID
	•	POST /api/users: Create a new user
	•	PUT /api/users/:userId: Update a user by ID
	•	DELETE /api/users/:userId: Delete a user by ID and associated thoughts
	•	POST /api/users/:userId/friends/:friendId: Add a friend to a user’s friend list
	•	DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user’s friend list

### Thoughts

	•	GET /api/thoughts: Get all thoughts
	•	GET /api/thoughts/:thoughtId: Get a thought by ID
	•	POST /api/thoughts: Create a new thought (requires a valid username)
	•	PUT /api/thoughts/:thoughtId: Update a thought by ID
	•	DELETE /api/thoughts/:thoughtId: Delete a thought by ID

### Reactions

	•	POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought
	•	DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought by reaction ID

## Technologies

	•	Nodemon.js
	•	Express.js
	•	MongoDB
	•	Mongoose
	•	JavaScript
 
 ## License
 
 This project is licensed under the MIT License. See the LICENSE file for more details.
