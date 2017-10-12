const express = require('express');
const app = express();
const cors = require('express-cors');
const config = require('./config.json');

//Controllers
const ReviewsController = require('./controllers/ReviewsController');

//Load controllers in server
app.use('/reviews', ReviewsController);

//Load extensions
app.use(cors({
  allowedOrigins: [
    'localhost',
    config.domain
  ]
}));

module.exports = app;

