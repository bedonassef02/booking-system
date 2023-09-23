const usersService = require('../../users/users.service');
const UnauthorizedException = require('../../utils/exceptions/unauthorized-exception');

const IsUserUpdatedMiddleware = async (req, res, next) => {
  const { user } = req;
  const { email } = req.user;
  const dbUser = await usersService.findOne({ email });
  if (isUpdated(user, dbUser)) {
    throw new UnauthorizedException('you must refresh toke');
  }
  next();
};

const isUpdated = (user, dbUser) => {
  const lastUpdate = parseInt(dbUser.updatedAt.getTime() / 1000);
  if (lastUpdate > user.iat) {
    return true;
  }
  return false;
};

module.exports = IsUserUpdatedMiddleware;
