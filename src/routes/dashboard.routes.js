const { Router } = require("express");
const { isAuthorized } = require("../utils/auth");
const router = Router();

router.get("/", isAuthorized, (req, res) => {
  res.render("dashboard", {
    guilds: req.user.guilds,
  });
});

router.get("/settings", isAuthorized, (req, res) => {
  res.send(200);
});

module.exports = router;
