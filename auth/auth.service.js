const User = require('../users/models/user.model');
const usersService = require('../users/users.service');
const bcrypt = require('bcrypt');

exports.login = async ({ email, password }) => {
    const user = await usersService.findOne({ email });
    if (await comparePassword({ password, hashedPassword: user.password })) {
    } return user;
}

exports.register = async ({ name, email, password }) => {
    const hashedPassword = await hashPassword({ password });
    const user = await User.create({ name, email, password: hashedPassword });
    return user;
}

const SALT = 12;

const hashPassword = async ({ password }) => {
    return await bcrypt.hash(password, SALT);
}

const comparePassword = async ({ password, hashedPassword }) => {
    console.log({ password, hashedPassword })
    return await bcrypt.compare(password, hashedPassword);
}