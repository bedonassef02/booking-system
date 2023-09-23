const UnauthorizedException = require("../../utils/exceptions/unauthorized-exception");
const tokenService = require('../services/tokern.service');

const AuthMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        throw new UnauthorizedException('token is required');
    }
    const user = tokenService.verify({ token });
    req.user = user;
    next();
}

module.exports = AuthMiddleware;