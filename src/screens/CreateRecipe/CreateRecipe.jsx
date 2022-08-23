import axios from "axios";
import React, { useState } from "react";

const CreateRecipe = () => {
  const [input, setInput] = useState({
    title: "",
    method: "",
    links: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((currentState) => {
      return {
        ...currentState,
        [name]: value,
      };
    });
  };
  const handleClick = (event) => {
    event.preventDefault();
    const newRecipe = {
      title: input.title,
      method: input.method,
      links: input.links,
    };
    axios.post("http://localhost:3001/create");
  };

  return (
    <div className="upload-page container">
      <h1>Upload a recipe</h1>
      <form>
        <input
          value={input.title}
          onChange={handleChange}
          type="text"
          placeholder="Recipe name"
          name="title"
        />
        <textarea
          name="method"
          cols="30"
          rows="10"
          value={input.method}
          placeholder="Write your method here"
        ></textarea>
        <input type="text" name="links" />
        <button onClick={handleClick} className="upload-btn">
          Upload Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
