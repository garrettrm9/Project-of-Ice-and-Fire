const db = require("../db/index.js");
const axios = require("axios");
const categories = {};

// ------------CATEGORIES------------- //
// ----------------------------------------------------
// Renders one SPECIFIC category
categories.oneCategory = (req, res, next) => {
  // console.log("oneCategory req.params.id", req.params.id);
  db
    .manyOrNone("SELECT * FROM categories WHERE id = $1", [req.params.id])
    .then(category => {
      res.locals.oneCategoryData = category;
      // console.log("categoryModel oneCategory", res.locals);
      next();
    })
    .catch(error => {
      console.log("error encountered in allCategories", error);
      next(error);
    });
};

// Renders all categories
categories.allCategories = (req, res, next) => {
  db
    .manyOrNone("SELECT * FROM categories")
    .then(categories => {
      res.locals.allCategoriesData = categories;
      // console.log("allCategories", res.locals);
      next();
    })
    .catch(error => {
      console.log("error encountered in allCategories", error);
      next(error);
    });
};

// // ----------------------------------------------------
// // Post a new category
categories.newCategory = (req, res, next) => {
  db
    .one("INSERT INTO categories (name) VALUES ($1) RETURNING *", [
      req.body.name
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

// ----------------------------------------------------
// Delete a category (ID param is categoryId)
categories.deleteCategory = (req, res, next) => {
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

// ----------------------------------------------------
// Edit a user's category (ID param is categoryId)
categories.updateCategory = (req, res, next) => {
  db
    .one("UPDATE categories SET name=$1 WHERE id=$2 RETURNING *;", [
      req.body.name,
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

module.exports = categories;

// // ------------CATEGORIES------------- //
// categories.allCategories = (req, res, next) => {
//   // console.log("allCategories, req.params.id", req.params.id);
//   db
//     .manyOrNone("SELECT * FROM categories WHERE user_id = $1;", [req.params.id])
//     .then(categories => {
//       res.locals = categories;
//       // console.log("allCategories", res.locals);
//       next();
//     })
//     .catch(error => {
//       console.log("error encountered in allCategories", error);
//       next(error);
//     });
// };

// categories.newCategory = (req, res, next) => {
//   // console.log("newCategory, req.params.id", req.params.id);
//   db
//     .one("INSERT INTO categories (name, user_id) VALUES ($1, $2) RETURNING *", [
//       req.body.name,
//       req.params.id
//     ])
//     .then(category => {
//       // console.log("newCategory", res.locals);
//       res.locals = category;
//       next();
//     })
//     .catch(error => {
//       console.log("error encountered in newCategory", error);
//       next(error);
//     });
// };

// categories.deleteCategory = (req, res, next) => {
//   db
//     .none("DELETE FROM categories WHERE id = $1", [req.params.id])
//     .then(() => {
//       next();
//     })
//     .catch(error => {
//       console.log("error encountered in deleteCategory", error);
//       next(error);
//     });
// };

// categories.updateCategory = (req, res, next) => {
//   // console.log("req.body:", req.body);
//   db
//     .one("UPDATE categories SET name=$1, user_id=$2 WHERE id=$3 RETURNING *;", [
//       req.body.name,
//       req.body.user_id,
//       req.params.id
//     ])
//     .then(category => {
//       res.locals = category;
//       // console.log("updateCategory", data);
//       next();
//     })
//     .catch(err => {
//       console.log("error encountered in updateCategory, err:", err);
//       next(err);
//     });
// };
