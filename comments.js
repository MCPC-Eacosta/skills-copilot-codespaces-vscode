// Create web server
// 1. Create web server with express
// 2. Create a route for post comments
// 3. Add comments to the database
// 4. Return all comments from database

// 1. Create web server with express
const express = require('express');
const app = express();

// 2. Create a route for post comments
app.post('/comments', (req, res) => {
  // 3. Add comments to the database
  res.json({message: 'Comment created!'});
});

// 4. Return all comments from database
app.get('/comments', (req, res) => {
  res.json({message: 'Comments returned!'});
});

// Start web server
app.listen(3000, () => {
  console.log('Web server started on port 3000');
});