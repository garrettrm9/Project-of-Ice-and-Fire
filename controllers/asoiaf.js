const router = require("express").Router();
const characters = require("../models/characters.js");
const categories = require("../models/categories.js");

// ------------------------------ASOIAF API calls------------------------ //
// ----------------------------------------------------
// // API call for character based on characterName URL param
router.get("/characters/:characterName", characters.findByName, (req, res) => {
  console.log("characters controller", res.locals);
  res.json(res.locals);
});

// // // ----------------------------------------------------
// // // API call for character based on character's Id URL param
// router.get("/:id", characters.findById, (req, res) => {
//   const character = res.locals;
//   // console.log("characters controller", character);
//   res.json(character);
// });

// ---------------------------------CHARACTERS--------------------------- //
// ----------------------------------------------------
// Renders all characters WITHOUT category ID
router.get("/character", characters.characters, (req, res) => {
  console.log("characters ALL retrieved", res.locals);
  res.json(res.locals);
});

// ----------------------------------------------------
// Renders all category's characters (ID param is categoryId)
router.get("/character/:id", characters.allCharacters, (req, res) => {
  console.log("characters retrieved", res.locals);
  res.json(res.locals);
});

// // ----------------------------------------------------
// // Adds character to category (ID param is categoryId)
router.post("/character/:id", characters.newCharacter, (req, res) => {
  console.log("character posted", res.locals);
  res.json(res.locals);
});

// ----------------------------------------------------
// Delete a character (ID param is characterId)
router.delete("/character/:id", characters.deleteCharacter, (req, res) => {
  console.log("character deleted", res.locals);
  res.json();
});

// ------------------------------CATEGORIES------------------------ //
// ----------------------------------------------------
// Renders all categories
router.get("/categories", categories.allCategories, (req, res) => {
  console.log("categories retrieved", res.locals);
  res.json(res.locals);
});

// ----------------------------------------------------
// Renders one SPECIFIC category
router.get("/categories/:id", categories.oneCategory, (req, res) => {
  console.log("category specific retrieved", res.locals);
  res.json(res.locals);
});

// // ----------------------------------------------------
// // Post a new category
router.post("/categories", categories.newCategory, (req, res) => {
  console.log("category posted", res.locals);
  res.json(res.locals);
});

// ----------------------------------------------------
// Delete a category (ID param is categoryId)
router.delete("/categories/:id", categories.deleteCategory, (req, res) => {
  console.log("category deleted", res.locals);
  res.json();
});

// ----------------------------------------------------
// Edit a user's category (ID param is categoryId)
router.put("/categories/:id", categories.updateCategory, (req, res) => {
  console.log("category edited", res.locals);
  res.json(res.locals);
});

module.exports = router;
