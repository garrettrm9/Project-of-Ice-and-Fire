const router = require("express").Router();

router.get("/categories", (req, res, next) => {
  res.render("category");
});

module.exports = router;

// router.get("/search", auth.restrict, (req, res, next) => {
//   res.render("trainsSearch");
// });
