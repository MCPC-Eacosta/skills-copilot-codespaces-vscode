// Create a web server
// Load the comments.json file
// Parse the file
// Render the comments
// Create a form to add a new comment
// Add the new comment to the comments.json file
// Redirect to the homepage
// Add a delete button to each comment
// Delete the comment from the comments.json file
// Redirect to the homepage

// Express
const express = require('express');
const app = express();

// File System
const fs = require('fs');

// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Method Override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Load the comments.json file
let comments = fs.readFileSync('./comments.json');
comments = JSON.parse(comments);

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Render the comments
app.get('/comments', (req, res) => {
  res.render('comments/index', { comments });
});

// Create a form to add a new comment
app.get('/comments/new', (req, res) => {
  res.render('comments/new');
});

// Add the new comment to the comments.json file
app.post('/comments', (req, res) => {
  comments.push(req.body);
  fs.writeFileSync('./comments.json', JSON.stringify(comments));
  res.redirect('/comments');
});

// Add a delete button to each comment
// Delete the comment from the comments.json file
// Redirect to the homepage
app.delete('/comments/:idx', (req, res) => {
  comments.splice(req.params.idx, 1);
  fs.writeFileSync('./comments.json', JSON.stringify(comments));
  res.redirect('/comments');
});

// Listen on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});