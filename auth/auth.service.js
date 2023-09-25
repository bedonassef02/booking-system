const usersService = require('../users/users.service');
const UnauthorizedException = require('../utils/exceptions/unauthorized-exception');
const BadRequestException = require('../utils/exceptions/bad-request.exception');
const passwordService = require('./services/password.service');
const { sign } = require('./services/tokern.service');
const emailsEvent = require('../utils/helpers/events/emails.events');

exports.login = async ({ email, password }) => {
  const user = await usersService.findOne({ email });
  if (
    !(await passwordService.comparePassword({
      password,
      hashedPassword: user.password,
    }))
  ) {
    throw new UnauthorizedException('email or password is incorrect');
  }
  emailsEvent.emit('login', { email });
  return plainIntoUserResponse(user);
};

exports.register = async ({ name, email, password }) => {
  const hashedPassword = await passwordService.hashPassword({ password });
  const user = await usersService.create({
    name,
    email,
    password: hashedPassword,
  });
  emailsEvent.emit('register', { email });
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

exports.updatePassword = async ({ id, currentPassword, newPassword }) => {
  const user = await usersService.findById({ id });
  if (
    await passwordService.comparePassword({
      password: currentPassword,
      hashedPassword: user.password,
    })
  ) {
    if (
      await passwordService.isSamePassword({
        password: newPassword,
        hashedPassword: user.password,
      })
    ) {
      throw new BadRequestException(
        'you cannot change your password to same password',
      );
    }
    const hashedPassword = await passwordService.hashPassword({
      password: newPassword,
    });
    await usersService.updatePassword({ id, password: hashedPassword });
    emailsEvent.emit('password.update', { email: user.email });
    return plainIntoUserResponse(user);
  }
  throw new BadRequestException('password not correct');
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
