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
// Renders all user's categories (ID param is userId)
router.get("/category/:id", categories.allCategories, (req, res) => {
  console.log("category retrieved", res.locals);
  res.json(res.locals);
});

// // ----------------------------------------------------
// // Post a user's new category (ID param is userId)
router.post("/category/:id", categories.newCategory, (req, res) => {
  console.log("category posted", res.locals);
  res.json(res.locals);
});

// ----------------------------------------------------
// Delete a user's category (ID param is categoryId)
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
