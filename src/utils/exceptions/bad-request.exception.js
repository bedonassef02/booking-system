const STATUS_CODE = require('../constants/status-code');

class BadRequestException extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestException';
    this.status = STATUS_CODE.BAD_REQUEST;
  }
}

module.exports = BadRequestException;
