const router = require("express").Router();
const passport = require("passport");
const { isAuth, isNotAuth } = require("../utils/isAuthenticated");

require("../utils/passport-config")(passport);

router.get("/", isNotAuth, (req, res) => {
  res.render("dashboard", req.user);
});

router.get("/login", isAuth, (req, res) => {
  res.render("login");
});

router.post(
  "/login",
  (req, res, next) => {
    console.log("/login POST fired --", req.body);
    next();
  },
  passport.authenticate("local", {
    successRedirect: "/",
    failureFlash: true,
    failureRedirect: "/login",
  })
);

module.exports = router;
