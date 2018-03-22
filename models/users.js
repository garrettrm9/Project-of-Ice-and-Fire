const axios = require("axios");
const db = require("../db/index.js");
const users = {};

// ------------CATEGORIES------------- //

users.allCategories = (req, res, next) => {
  // console.log("allCategories, req.params.id", req.params.id);
  db
    .manyOrNone("SELECT * FROM categories WHERE user_id = $1;", [req.params.id])
    .then(categories => {
      res.locals = categories;
      // console.log("allCategories", res.locals);
      next();
    })
    .catch(error => {
      console.log("error encountered in allCategories", error);
      next(error);
    });
};

users.newCategory = (req, res, next) => {
  // console.log("newCategory, req.params.id", req.params.id);
  db
    .one("INSERT INTO categories (name, user_id) VALUES ($1, $2) RETURNING *", [
      req.body.name,
      req.params.id
    ])
    .then(category => {
      // console.log("newCategory", res.locals);
      res.locals = category;
      next();
    })
    .catch(error => {
      console.log("error encountered in newCategory", error);
      next(error);
    });
};

users.deleteCategory = (req, res, next) => {
  db
    .none("DELETE FROM categories WHERE id = $1", [req.params.id])
    .then(() => {
      next();
    })
    .catch(error => {
      console.log("error encountered in deleteCategory", error);
      next(error);
    });
};

users.updateCategory = (req, res, next) => {
  // console.log("req.body:", req.body);
  db
    .one("UPDATE categories SET name=$1, user_id=$2 WHERE id=$3 RETURNING *;", [
      req.body.name,
      req.body.user_id,
      req.params.id
    ])
    .then(category => {
      res.locals = category;
      // console.log("updateCategory", data);
      next();
    })
    .catch(err => {
      console.log("error encountered in updateCategory, err:", err);
      next(err);
    });
};

// ------------CHARACTERS------------- //

users.allCharacters = (req, res, next) => {
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

users.newCharacter = (req, res, next) => {
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

users.deleteCharacter = (req, res, next) => {
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

module.exports = users;
