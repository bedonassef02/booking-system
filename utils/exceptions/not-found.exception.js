const STATUS_CODE = require("../constants/status-code");

class NotFoundException extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotFoundException';
        this.status = STATUS_CODE.NOT_FOUND;
    }
}

module.exports = NotFoundException;