const router = require("express").Router();
const characters = require("../models/characters.js");

// router.get("/", (req, res, next) => {
//   res.redirect("/users/profile");
// });

// // API call for character based on character's name URL param
router.get("/character/search/:name", characters.findByName, (req, res) => {
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

module.exports = router;
