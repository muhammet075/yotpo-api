const express = require('express');
const app = express();

//Controllers
const ReviewsController = require('./controllers/ReviewsController');

//Load controllers in server
app.use('/reviews', ReviewsController);

module.exports = app;

