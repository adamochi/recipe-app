const express = require("express");
const router = express.Router();
const Recipe = require("../models/RecipeModel");

router.route("/create").post((req, res) => {
  const title = req.body.title;
  const method = req.body.method;
  const links = req.body.links;
  const newRecipe = new Recipe({
    title,
    method,
    links,
  });
  newRecipe.save();
});

module.exports = router;
