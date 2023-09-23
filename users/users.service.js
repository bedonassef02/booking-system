const User = require('./models/user.model');

exports.findOne = async ({ email }) => {
    return await User.findOne({ email });
}

exports.create = async ({ name, email, password }) => {
    return await User.create({ name, email, password });
}