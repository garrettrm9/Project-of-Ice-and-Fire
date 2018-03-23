const db = require("../db/index.js");
const axios = require("axios");
const characters = {};

// ----------------------ASOIAF API calls----------------------- //
// ----------------------------------------------------
// // API call for character based on character's name URL param
characters.findByName = (req, res, next) => {
  const name = req.params.name;
  // console.log("charactersModel findByName", characterName);
  axios({
    url: `https://anapioficeandfire.com/api/characters?name=${name}`,
    method: "get"
  })
    .then(response => {
      // console.log("response", response.data[0].name);
      res.locals = response.data[0];
      next();
    })
    .catch(err => {
      console.log("error encountered in charactersModel findByName", err);
      next(err);
    });
};

// characters.findById = (req, res, next) => {
//   const id = req.params.id;
//   // console.log("charactersModel findById", id);
//   axios({
//     url: `https://anapioficeandfire.com/api/characters/${id}`,
//     method: "get"
//   })
//     .then(response => {
//       res.locals = response.data;
//       next();
//     })
//     .catch(err => {
//       console.log("error encountered in charactersModel findById", err);
//       next(err);
//     });
// };

// -----------------------CHARACTERS------------------------- //
characters.characters = (req, res, next) => {
  db
    .manyOrNone("SELECT * FROM characters")
    .then(characters => {
      // console.log("characters", res.locals);
      res.locals = characters;
      next();
    })
    .catch(error => {
      console.log("error encountered in allCharacters", error);
      next(error);
    });
};

characters.allCharacters = (req, res, next) => {
  // console.log("allCharacters, req.params.id", req.params.id);
  db
    .manyOrNone(`SELECT * FROM characters WHERE category_id = ${req.params.id}`)
    .then(characters => {
      // console.log("allCharacters", res.locals);
      res.locals = characters;
      next();
    })
    .catch(error => {
      console.log("error encountered in allCharacters", error);
      next(error);
    });
};

characters.newCharacter = (req, res, next) => {
  // console.log("newCharacter, req.params.id", req.params.id);
  db
    .one(
      "INSERT INTO characters (name, category_id) VALUES ($1, $2) RETURNING *",
      [req.body.name, req.params.id]
    )
    .then(character => {
      // console.log("newCharacter", res.locals);
      res.locals = character;
      next();
    })
    .catch(error => {
      console.log("error encountered in newCharacter", error);
      next(error);
    });
};

characters.deleteCharacter = (req, res, next) => {
  db
    .none("DELETE FROM characters WHERE id = $1", [req.params.id])
    .then(() => {
      next();
    })
    .catch(error => {
      console.log("error encountered in deleteCharacter", error);
      next(error);
    });
};

module.exports = characters;
