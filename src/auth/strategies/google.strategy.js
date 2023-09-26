const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const authService = require('../auth.service');
const usersService = require('../../users/users.service');
const asyncHandler = require('express-async-handler');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_REDIRECT_URL,
      passReqToCallback: true,
    },
    asyncHandler(async (request, accessToken, refreshToken, profile, done) => {
      const user = await authService.findOrCreate({ profile });
      return done(null, user);
    }),
  ),
);

passport.serializeUser((res, done) => {
  done(null, res.user.id);
});

passport.deserializeUser(
  asyncHandler(async (id, done) => {
    const user = await usersService.findById(id); // Replace with your function to retrieve user by ID
    done(null, user);
  }),
);
