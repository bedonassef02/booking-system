const router = require('express').Router();
const passport = require('passport');

router.get(
  '/',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

router.get('/success', (req, res) => {
  res.send({ message: 'success' });
});

router.get('/failure', (req, res) => {
  res.send({ message: 'failure' });
});

router.get(
  '/redirect',
  passport.authenticate('google', {
    successRedirect: '/auth/google/success',
    failureRedirect: '/auth/google/failure',
  }),
);

module.exports = router;
