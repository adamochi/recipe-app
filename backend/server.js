const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://adamochi:petroc22@adamochi.rzbqjn8.mongodb.net/RecipeDB"
);

app.use("/", require("./routes/recipeRoutes"));

app.listen(3001, function () {
  console.log("✅ server is listening on port 3001");
});
