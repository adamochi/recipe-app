import React, { useState, useEffect } from "react";
import "./index.scss";

const Search = () => {
  const [search, setSearch] = useState("");
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
  const [searchedRecipes, setSearchedRecipes] = useState(recipes);

  useEffect(() => {
    fetch("/search")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        setRecipes(jsonRes);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const upper = search.toUpperCase();

    const searched = recipes.filter(
      (item) => item.title.toUpperCase().indexOf(upper) !== -1
    );
    setSearchedRecipes(searched);
    setLoading(false);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search-page container">
      <h1>Search page</h1>
      <form>
        <input
          type="text"
          name="keyword"
          onChange={handleChange}
          autoFocus
          placeholder="search by recipe title"
        />
        <button type="submit" value={search} onClick={handleSearch}>
          search
        </button>
      </form>
      {loading
        ? "Waiting for input..."
        : searchedRecipes.map((recipe, key) => (
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

export default Search;
/*
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
          */
