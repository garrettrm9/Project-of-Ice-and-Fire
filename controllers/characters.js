const router = require("express").Router();
const characters = require("../models/characters.js");

// // API call for character based on character's name URL param
router.get("/search/:name", characters.findByName, (req, res) => {
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
router.get("/", characters.characters, (req, res) => {
  console.log("characters ALL retrieved", res.locals.charactersData);
  res.json(res.locals.charactersData);
});

// ----------------------------------------------------
// Renders all category's characters (ID param is categoryId)
router.get("/:id", characters.allCharacters, (req, res) => {
  console.log("characters retrieved", res.locals.allCharactersData);
  res.render("./category", { allCharactersData: res.locals.allCharactersData });
});

// // ----------------------------------------------------
// // Adds character to category (ID param is categoryId)
router.post("/:id", characters.newCharacter, (req, res) => {
  console.log("character posted", res.locals);
  res.json(res.locals);
});

// ----------------------------------------------------
// Delete a character (ID param is characterId)
router.delete("/:id", characters.deleteCharacter, (req, res) => {
  console.log("character deleted", res.locals);
  res.json();
});

module.exports = router;
