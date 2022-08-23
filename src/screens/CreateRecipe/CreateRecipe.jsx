import axios from "axios";
import React, { useState } from "react";
import "./index.scss";

const CreateRecipe = () => {
  const [input, setInput] = useState({
    title: "",
    catagory: "",
    method: "",
    links: "",
    image: "",
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
      catagory: input.catagory,
      method: input.method,
      links: input.links,
      image: input.image,
    };
    axios.post("http://localhost:3001/create", newRecipe);
  };

  return (
    <div className="upload-page container">
      <h1>Upload a recipe</h1>
      <form>
        <input
          required={true}
          value={input.title}
          onChange={handleChange}
          type="text"
          placeholder="Recipe name"
          name="title"
        />
        {/* <input
          required={true}
          value={input.catagory}
          onChange={handleChange}
          type="text"
          placeholder="catagory"
          name="catagory"
        /> */}
        <select onChange={handleChange} required={true} name="catagory">
          <option value=""> Select a Catagory </option>
          <option value="dressings">Dressings</option>
          <option value="sauces">Sauces</option>
          <option value="salad">Salads</option>
          <option value="appetizers">Appetizers</option>
          <option value="soup">Soups &amp; Stews</option>
          <option value="vegetables">Rice, Grains, &amp; Beans</option>
          <option value="pasta">Pasta</option>
          <option value="main">Main Meals</option>
          <option value="breakfast">Eggs &amp; Breakfast</option>\
          <option value="sandwich">Sandwiches</option>
          <option value="pies">Pies</option>
          <option value="dessert">Dessert</option>
        </select>
        <textarea
          required
          name="method"
          cols="30"
          rows="10"
          value={input.method}
          onChange={handleChange}
          placeholder="Write your method here"
        />
        <input
          type="text"
          name="links"
          placeholder="link to video (optional)"
        />
        <input
          type="text"
          name="image"
          onChange={handleChange}
          placeholder="link to image (optional)"
        />
        <button onClick={handleClick} className="upload-btn">
          Upload Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
