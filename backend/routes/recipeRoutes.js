const express = require("express");
const router = express.Router();
const Recipe = require("../models/RecipeModel");

router.route("/create").post((req, res) => {
  const title = req.body.title;
  const catagory = req.body.catagory;
  const method = req.body.method;
  const links = req.body.links;
  const image = req.body.image;
  try {
    const newRecipe = new Recipe({
      title,
      catagory,
      method,
      links,
      image,
    });
    newRecipe.save();
  } catch {
    console.log(error);
  }
});

router.route("/recipes").get((req, res) => {
  Recipe.find().then((foundNotes) => res.json(foundNotes));
});

router.route("/search").get((req, res) => {
  Recipe.find().then((foundNotes) => res.json(foundNotes));
});

module.exports = router;
