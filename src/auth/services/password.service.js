const bcrypt = require('bcrypt');

const SALT = 12;

exports.hashPassword = async ({ password }) => {
  return await bcrypt.hash(password, SALT);
};

exports.comparePassword = async ({ password, hashedPassword }) => {
  return await bcrypt.compare(password, hashedPassword);
};

exports.isSamePassword = async ({ password, hashedPassword }) => {
  if (await bcrypt.compare(password, hashedPassword)) {
    return true;
  }
  return false;
};
