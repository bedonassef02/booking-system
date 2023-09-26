const STATUS_CODE = require('../constants/status-code');

class UnauthorizedException extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnauthorizedException';
    this.status = STATUS_CODE.UNAUTHORIZED;
  }
}

module.exports = UnauthorizedException;
