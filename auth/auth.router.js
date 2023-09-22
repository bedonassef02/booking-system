const router = require('express').Router();

const { login, register } = require('./auth.controller');
const LoginDto = require('./dto/login.dto');
const RegisterDto = require('./dto/register.dto');

router.post('/login', LoginDto, login);
router.post('/register', RegisterDto, register);

module.exports = router;