const router = require("express").Router();
const characters = require("../models/characters.js");

router.get("/characters/:characterName", characters.findByName, (req, res) => {
  const character = res.locals;
  // console.log("characters controller", character);
  res.json(character);
});

router.get("/:id", characters.findById, (req, res) => {
  const character = res.locals;
  // console.log("characters controller", character);
  res.json(character);
});

module.exports = router;
