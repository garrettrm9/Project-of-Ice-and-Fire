const axios = require("axios");
const db = require("../db/index.js");
const users = {};

users.allCategories = (req, res, next) => {
  console.log("allCategories, req.params.id", req.params.id);
  const id = req.params.id;
  db
    .manyOrNone(`SELECT * FROM categories WHERE user_id = ${id}`)
    .then(categories => {
      res.locals.categories = categories;
      console.log("allCategories", categories);
      next();
    })
    .catch(error => {
      console.log("error encountered in allCategories", error);
      next(error);
    });
};

users.newCategory = (req, res, next) => {
  // console.log("OOKKK", req.body);
  db
    .one(
      "INSERT INTO categories (name, user_id) VALUES ($1, $2) RETURNING id",
      [req.body.name, req.body.user_id]
    )
    .then(category => {
      console.log("newCategory", category);
      res.locals.categoryId = category.id;
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
  let { name, user_id } = req.body;
  db
    .one("UPDATE categories SET name=$1, user_id=$2 WHERE id=$3 RETURNING *;", [
      name,
      user_id,
      req.params.id
    ])
    .then(data => {
      res.locals.data = data;
      console.log("updateCategory", data);
      next();
    })
    .catch(err => {
      console.log("error encountered in updateCategory, err:", err);
      next(err);
    });
};

module.exports = users;
