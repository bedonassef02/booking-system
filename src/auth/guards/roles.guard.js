const UnauthorizedException = require('../../utils/exceptions/unauthorized-exception');

const RoleGuard = (allowedRoles) => (req, res, next) => {
  const { user } = req;
  const { role } = user;
  if (!allowedRoles.includes(role)) {
    throw new UnauthorizedException('you are not allowed to access this route');
  }
  next();
};

module.exports = RoleGuard;
