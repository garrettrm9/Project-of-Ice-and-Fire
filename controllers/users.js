const router = require("express").Router();
const users = require("../models/users");
const passport = require("passport");
const auth = require("../services/auth");

// ----------------------------------------
// users index

router.get("/", (req, res, next) => {
  res.redirect("/users/profile");
});

router.post(
  "/",
  passport.authenticate("local-signup", {
    failureRedirect: "/users/new",
    successRedirect: "/users/profile"
  })
);

// ----------------------------------------
// register new user

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/landing");
});

// ----------------------------------------
// user login

router.get("/login", (req, res) => {
  res.render("/login");
});

router.post(
  "/login",
  passport.authenticate("local-login", {
    failureRedirect: "/users/login",
    successRedirect: "/users/profile"
  })
);

// ----------------------------------------
// user profile

router.get("/user", auth.restrict, users.findByEmailMiddleware, (req, res) => {
  // console.log("in handler for users/profile");
  // console.log("req.user:");
  // console.log(req.user);
  res.render("/user", { user: res.locals.userData });
});

module.exports = router;
