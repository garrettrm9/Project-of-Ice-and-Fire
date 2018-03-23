const router = require("express").Router();
const users = require("../models/users");
const passport = require("passport");
const auth = require("../services/auth");

// ----------------------------------------
// users index
router.get("/", (req, res, next) => {
  res.redirect("/users/user");
});

router.post(
  "/",
  passport.authenticate("local-signup", {
    failureRedirect: "/users/register",
    successRedirect: "/users/user"
  })
);

// ----------------------------------------
// register new user
router.get("/new", (req, res) => {
  res.render("users/register");
});

// ----------------------------------------
// user logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// ----------------------------------------
// user login
router.get("/login", (req, res) => {
  res.render("/users/login");
});

router.post(
  "/login",
  passport.authenticate("local-login", {
    failureRedirect: "/users/login",
    successRedirect: "/users/user"
  })
);

// ----------------------------------------
// user profile
router.get("/user", auth.restrict, users.findByEmailMiddleware, (req, res) => {
  res.render("/users/user", { user: res.locals.userData });
});

module.exports = router;
