const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const expiresIn = process.env.JWT_EXPIRES_IN;

exports.sign = ({ id, email, role }) => {
  return jwt.sign({ id, email, role }, secret, { expiresIn });
};

exports.verify = ({ token }) => {
  return jwt.verify(token, secret);
};
