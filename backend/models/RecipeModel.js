const mongoose = require("mongoose");

const recipeSchema = {
  title: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  method: { type: String, required },
  links: { type: String },
};
const Recipe = mongoose.model("recipes", recipeSchema);

module.exports = Recipe;
