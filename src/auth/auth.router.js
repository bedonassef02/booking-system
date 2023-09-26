const router = require('express').Router();
require('./strategies/google.strategy');
const AuthMiddleware = require('./middlewares/auth.middleware');
const IsUserUpdatedMiddleware = require('./middlewares/is-user-updated.middleware');
const { login, register, updatePassword } = require('./auth.controller');
const LoginDto = require('./dto/login.dto');
const RegisterDto = require('./dto/register.dto');
const UpdatePasswordDto = require('./dto/update-password.dto');

router.post('/login', LoginDto, login);
router.post('/register', RegisterDto, register);

router.use('/google', require('./google.router'));

router.patch(
  '/password',
  AuthMiddleware,
  IsUserUpdatedMiddleware,
  UpdatePasswordDto,
  updatePassword,
);

module.exports = router;
