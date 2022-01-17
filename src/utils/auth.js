function isAuthorized(req, res, next) {
  if (req.user) {
    // console.log("User is logged in");
    // console.log(req.user);
    next();
  } else {
    res.redirect("/");
  }
}

function isNotAuthorized(req, res, next) {
  if (req.user) {
    // console.log("User is logged in");
    res.redirect("/dashboard");
  } else {
    next();
  }
}

module.exports = {
  isAuthorized,
  isNotAuthorized,
};
