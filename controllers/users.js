const router = require("express").Router();
const users = require("../models/users.js");

// ------------CATEGORIES------------- //

// ----------------------------------------------------
// Renders all user's categories (not ID specific yet)
router.get("/:id", users.allCategories, (req, res) => {
  const { categories } = res.locals;
  res.json({ categories });
});

// // ----------------------------------------------------
// // Post a user's new category (not ID specific yet)

router.post("/:id", users.newCategory, (req, res) => {
  console.log(res.locals);
  res.json(res.locals.categoryId);
});

// ----------------------------------------------------
// Delete a user's category
router.delete("/category/:id", users.deleteCategory, (req, res) => {
  console.log("category deleted", res.locals);
  res.json();
});

// // ----------------------------------------------------
// // Edit a user's category
// router.put("/user/:id", categories.updateCategory, (req, res) => {
//   console.log("in PUT an activity/, res.locals:", res.locals);
//   res.json(res.locals.data);
// });

module.exports = router;
