const User = require('./models/user.model');

exports.findOne = async ({ email }) => {
  return await User.findOne({ email });
};

exports.create = async ({ name, email, password, provider, providerId }) => {
  return await User.create({ name, email, password, provider, providerId });
};

exports.findById = async ({ id }) => {
  return await User.findById(id);
};

exports.updatePassword = async ({ id, password }) => {
  return await User.findByIdAndUpdate(id, { password }, { new: true });
};
