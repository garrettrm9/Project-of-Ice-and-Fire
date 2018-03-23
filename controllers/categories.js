const router = require("express").Router();
const categories = require("../models/categories.js");

// ----------------------------------------------------
// Renders all categories
router.get("/category", categories.allCategories, (req, res) => {
  console.log("categories retrieved", res.locals);
  res.json(res.locals);
});

// ----------------------------------------------------
// Renders one SPECIFIC category
router.get("/category/:id", categories.oneCategory, (req, res) => {
  console.log("category specific retrieved", res.locals);
  res.json(res.locals);
});

// // ----------------------------------------------------
// // Post a new category
router.post("/category", categories.newCategory, (req, res) => {
  console.log("category posted", res.locals);
  res.json(res.locals);
});

// ----------------------------------------------------
// Delete a category (ID param is categoryId)
router.delete("/category/:id", categories.deleteCategory, (req, res) => {
  console.log("category deleted", res.locals);
  res.json();
});

// ----------------------------------------------------
// Edit a user's category (ID param is categoryId)
router.put("/category/:id", categories.updateCategory, (req, res) => {
  console.log("category edited", res.locals);
  res.json(res.locals);
});

module.exports = router;
