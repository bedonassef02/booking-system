class UnauthorizedException extends Error {
    constructor(message) {
        super(message);
        this.name = 'UnauthorizedException';
        this.status = 401;
    }
}

module.exports = UnauthorizedException;