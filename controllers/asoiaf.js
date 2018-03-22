const router = require("express").Router();
const characters = require("../models/characters.js");

// // ----------------------------------------------------
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

module.exports = router;
