import React, { useEffect, useState } from "react";
import "./index.scss";

const Recipes = () => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([
    {
      title: "",
      catagory: "",
      method: "",
      links: "",
      likes: "",
    },
  ]);
  useEffect(() => {
    fetch("/recipes")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        setRecipes(jsonRes);
        setLoading(false);
      });
  }, []);

  return (
    <div className="trending-page container">
      <h1 className="trending-header">Trending Recipes</h1>
      {loading
        ? "Loading..."
        : recipes.map((recipe, key) => (
            <div className="recipe-box" key={key}>
              <div className="recipe-title-div">
                <h3>{recipe.title}</h3>
                <h6>{recipe.catagory}</h6>
              </div>
              <h5>Method:</h5>
              <p>{recipe.method}</p>
              {recipe.image !== "" ? (
                <img src={recipe.image} alt="" />
              ) : (
                <span>should be an image here</span>
              )}

              <h5>{recipe.likes}💘</h5>
            </div>
          ))}
    </div>
  );
};

export default Recipes;
