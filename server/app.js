var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
var routes = require('./routes');

var app = express();

// Configure middleware here
app.use(morgan('dev'));

// body-parser pre-parses incoming requests as json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Allow for cross-origin requests
app.use(cors());

// Set up api routers
routes.setup(app);

module.exports = app;