const router = require('express').Router();
const passport = require('passport');
require('./strategies/google.strategy')

const { login, register } = require('./auth.controller');
const LoginDto = require('./dto/login.dto');
const RegisterDto = require('./dto/register.dto');

router.post('/login', LoginDto, login);
router.post('/register', RegisterDto, register);


router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);


router.get('/google/success', (req, res) => {
    res.send({ message: 'success' });
});


router.get('/google/redirect',
    passport.authenticate('google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
    }));

module.exports = router;
