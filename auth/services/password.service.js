const bcrypt = require('bcrypt');

const SALT = 12;

const hashPassword = async ({ password }) => {
  return await bcrypt.hash(password, SALT);
};

const comparePassword = async ({ password, hashedPassword }) => {
  return await bcrypt.compare(password, hashedPassword);
};

module.exports = { hashPassword, comparePassword };
