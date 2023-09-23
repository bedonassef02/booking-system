const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET

exports.sign = ({ id, email, role }) => {
    return jwt.sign({ id, email, role }, secret, { expiresIn: '1d' });
}

exports.verify = ({ token }) => {
    return jwt.verify(token, secret);
}