const User = require('./models/user.model');

exports.findOne = async ({ email }) => {
    return await User.findOne({ email });
}