const LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  function authUser(username, password, done) {
    console.log("AuthUser fired!", username, password);
    if (username.length < 3) {
      return done(null, false, { message: "Invalid username input! :(" });
    }

    if (password.length < 3) {
      return done(null, false, { message: "Invalid password input! :(" });
    }

    return done(null, { id: Math.random() * 1000, username });
  }

  passport.use(new LocalStrategy({ usernameField: "username" }, authUser));
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));
};
