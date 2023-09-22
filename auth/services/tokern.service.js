const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET

exports.sign = ({ id, email }) => {
    return jwt.sign({ id, email }, secret, { expiresIn: '1d' });
}