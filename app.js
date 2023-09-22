const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const globalExceptionFilter = require('./utils/filters/global-exception.filter');

const app = express();


dotenv.config()

app.use(morgan('dev'));

app.use(express.json());


// Define your routes and middleware here
app.use('/auth', require('./auth/auth.router'))

app.use(globalExceptionFilter);

module.exports = app;
