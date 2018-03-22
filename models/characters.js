const db = require("../db/index.js");
const axios = require("axios");
const characters = {};

characters.findByName = (req, res, next) => {
  const characterName = req.params.characterName;
  // console.log("charactersModel findByName", characterName);
  axios({
    url: `https://anapioficeandfire.com/api/characters?name=${characterName}`,
    method: "get"
  })
    .then(response => {
      res.locals = response.data;
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

module.exports = characters;
