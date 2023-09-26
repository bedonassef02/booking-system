const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const passport = require('passport');
const session = require('express-session');
const globalExceptionFilter = require('./utils/filters/global-exception.filter');
const NotFoundException = require('./utils/exceptions/not-found.exception');
const path = require('node:path');
const STATUS_CODE = require('./utils/constants/status-code');
const limiter = require('./utils/helpers/app/limiter');
const { default: helmet } = require('helmet');
const winstonLogger = require('./utils/helpers/logger/winston.logger');
const cors = require('cors');
require('./emails/emails');

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  }),
);

app.use(winstonLogger);

const ENV = process.env.NODE_ENV !== 'production' ? 'dev' : 'combined';

// app.use(morgan(ENV));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use(limiter);
app.use(helmet());

app.use(cors());

const parentDir = path.resolve(__dirname, '..');
app.use(express.static(path.join(parentDir, 'public')));

app.get('/', (req, res) => {
  res.status(STATUS_CODE.OK).json({ message: 'Index' });
});

// TODO: implement payment
// TODO: implement whishlist

// Define your routes and middleware here
app.use('/auth', require('./auth/auth.router'));
app.use('/categories', require('./categories/categories.router'));
app.use('/offering', require('./offering/offering.router'));
app.use('/booking', require('./booking/booking.router'));
app.use('/notifications', require('./notifications/notifications.router'));
app.use('/payment', require('./payment/payment.router'));
app.use('/wishlist', require('./wishlist/wishlist.router'));

app.all('*', (req, res) => {
  const path = req.path;
  throw new NotFoundException(`Not found ${path}`);
});

app.use(globalExceptionFilter);

module.exports = app;
