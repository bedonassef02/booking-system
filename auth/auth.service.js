const User = require('../users/models/user.model');
const usersService = require('../users/users.service');
const UnauthorizedException = require("../utils/exceptions/unauthorized-exception");
const { comparePassword, hashPassword } = require('./services/password.service');
const { sign } = require('./services/tokern.service');

exports.login = async ({ email, password }) => {
    const user = await usersService.findOne({ email });
    if (!await comparePassword({ password, hashedPassword: user.password })) {
        throw new UnauthorizedException('email or password is incorrect')
    }
    return plainIntoUserResponse(user);
}

exports.register = async ({ name, email, password }) => {
    const hashedPassword = await hashPassword({ password });
    const user = await User.create({ name, email, password: hashedPassword });
    return plainIntoUserResponse(user);
}

const plainIntoUserResponse = (user) => {
    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        },
        token: sign({ id: user.id, email: user.email })
    }
}

