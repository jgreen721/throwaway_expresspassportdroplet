const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect("");
  }

  next();
};

const isNotAuth = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.redirect("login");
  }

  next();
};

module.exports = {
  isAuth,
  isNotAuth,
};
