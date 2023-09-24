const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const authService = require('../auth.service');
const usersService = require('../../users/users.service');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_REDIRECT_URL,
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        const user = await authService.findOrCreate({ profile });
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    },
  ),
);

passport.serializeUser((res, done) => {
  done(null, res.user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await usersService.findById(id); // Replace with your function to retrieve user by ID
    done(null, user);
  } catch (err) {
    done(err);
  }
});
