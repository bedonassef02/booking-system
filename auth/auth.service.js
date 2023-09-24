const usersService = require('../users/users.service');
const UnauthorizedException = require('../utils/exceptions/unauthorized-exception');
const {
  comparePassword,
  hashPassword,
} = require('./services/password.service');
const { sign } = require('./services/tokern.service');

exports.login = async ({ email, password }) => {
  const user = await usersService.findOne({ email });
  if (!(await comparePassword({ password, hashedPassword: user.password }))) {
    throw new UnauthorizedException('email or password is incorrect');
  }
  return plainIntoUserResponse(user);
};

exports.register = async ({ name, email, password }) => {
  const hashedPassword = await hashPassword({ password });
  const user = await usersService.create({
    name,
    email,
    password: hashedPassword,
  });
  return plainIntoUserResponse(user);
};

exports.findOrCreate = async ({ profile }) => {
  const { email, name, sub } = profile._json;
  const provider = 'google';
  const user = await usersService.findOne({ email });
  if (user) {
    return plainIntoUserResponse(user);
  }
  const newUser = await usersService.create({
    name,
    email,
    provider,
    providerId: sub,
  });
  return plainIntoUserResponse(newUser);
};

const plainIntoUserResponse = (user) => {
  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token: sign({ id: user.id, email: user.email, role: user.role }),
  };
};
