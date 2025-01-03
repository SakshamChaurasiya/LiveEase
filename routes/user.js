const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");


router.route("/signup")
  .get(userController.renderSignupForm)
  .post(wrapAsync(userController.signup));


router.route("/login")
  .get(userController.renderLoginForm)
  .post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: '/login', failureFlash: true }),
    userController.login);


router.get("/logout", userController.logout);


router.get("/privacy", (req, res) => {
  res.render("../views/users/privacy.ejs"); // Assuming there's a privacy.ejs template
});

router.get("/terms", (req, res) => {
  res.render("../views/users/terms.ejs"); // Assuming there's a privacy.ejs template
});



module.exports = router;
