const mongoose = require("mongoose");

const recipeSchema = {
  title: { type: String, required: true },
  catagory: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  method: { type: String, required: true },
  links: { type: String },
  image: { type: String },
  likes: { type: Number, default: "0" },
};
const Recipe = mongoose.model("recipes", recipeSchema);

module.exports = Recipe;
