const router = require("express").Router();
const users = require("../models/users.js");

// ------------CATEGORIES------------- //

// ----------------------------------------------------
// Renders all user's categories (ID param is userId)
router.get("/category/:id", users.allCategories, (req, res) => {
  console.log("category retrieved", res.locals);
  res.json(res.locals);
});

// // ----------------------------------------------------
// // Post a user's new category (ID param is userId)
router.post("/category/:id", users.newCategory, (req, res) => {
  console.log("category posted", res.locals);
  res.json(res.locals);
});

// ----------------------------------------------------
// Delete a user's category (ID param is categoryId)
router.delete("/category/:id", users.deleteCategory, (req, res) => {
  console.log("category deleted", res.locals);
  res.json();
});

// ----------------------------------------------------
// Edit a user's category (ID param is categoryId)
router.put("/category/:id", users.updateCategory, (req, res) => {
  console.log("category edited", res.locals);
  res.json(res.locals);
});

// ------------CHARACTERS------------- //

// ----------------------------------------------------
// Renders all category's characters (ID param is categoryId)
router.get("/character/:id", users.allCharacters, (req, res) => {
  console.log("characters retrieved", res.locals);
  res.json(res.locals);
});

// // ----------------------------------------------------
// // Adds character to category (ID param is categoryId)
router.post("/character/:id", users.newCharacter, (req, res) => {
  console.log("character posted", res.locals);
  res.json(res.locals);
});

// ----------------------------------------------------
// Delete a character (ID param is characterId)
router.delete("/character/:id", users.deleteCharacter, (req, res) => {
  console.log("character deleted", res.locals);
  res.json();
});

module.exports = router;
