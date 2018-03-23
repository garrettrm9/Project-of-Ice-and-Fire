const router = require("express").Router();
const categories = require("../models/categories.js");

// ----------------------------------------------------
// Renders all categories
router.get("/", categories.allCategories, (req, res) => {
  console.log("categories retrieved", res.locals.allCategoriesData);
  // res.json(res.locals.allCategoriesData);
  res.render("./main", { categoriesData: res.locals.allCategoriesData });
});

// ----------------------------------------------------
// Renders one SPECIFIC category
router.get("/:id", categories.oneCategory, (req, res) => {
  console.log("category specific retrieved", res.locals.oneCategoryData);
  res.json(res.locals.oneCategoryData);
});

// // ----------------------------------------------------
// // Post a new category
router.post("/", categories.newCategory, (req, res) => {
  console.log("category posted", res.locals);
  res.json(res.locals);
});

// ----------------------------------------------------
// Delete a category (ID param is categoryId)
router.delete("/:id", categories.deleteCategory, (req, res) => {
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
