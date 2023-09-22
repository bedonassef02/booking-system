const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

// Define your routes and middleware here

module.exports = app;
