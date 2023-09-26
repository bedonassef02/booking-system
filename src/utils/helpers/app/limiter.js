const { default: rateLimit } = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100, // 100 requests per hour per IP
  message: 'Too many requests from this IP, please try again later.',
});

module.exports = limiter;
