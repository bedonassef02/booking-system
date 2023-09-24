const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const passport = require('passport');
const session = require('express-session');
const globalExceptionFilter = require('./utils/filters/global-exception.filter');
const NotFoundException = require('./utils/exceptions/not-found.exception');
const app = express();

app.use(session({
    secret: 'your-secret-key', // Replace with a secret key for session encryption
    resave: true,
    saveUninitialized: true,
}));



dotenv.config()

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(passport.initialize());
app.use(passport.session());

// app.use(express.static(__dirname, 'public'));

// Define your routes and middleware here
app.use('/auth', require('./auth/auth.router'))
app.use('/categories', require('./categories/categories.router'));
app.use('/offering', require('./offering/offering.router'));
app.use('/booking', require('./booking/booking.router'));

app.all('*', (req, res) => {
    const path = req.path;
    throw new NotFoundException(`Not found ${path}`);
})

app.use(globalExceptionFilter);

module.exports = app;
