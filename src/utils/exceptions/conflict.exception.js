const STATUS_CODE = require('../constants/status-code');

class ConflictException extends Error {
  constructor(message) {
    super(message);
    this.name = 'ConflictException';
    this.status = STATUS_CODE.CONFLICT;
  }
}

module.exports = ConflictException;
