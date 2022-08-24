import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.scss";

const CreateRecipe = () => {
  const [respons, setRespons] = useState(false);
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
    if (input.title === "") {
      return console.log("missing a title");
    }
    if (input.catagory === "") {
      return console.log("please select a catagory");
    }
    if (input.method === "") {
      return console.log("please write a Method");
    }
    const newRecipe = {
      title: input.title,
      catagory: input.catagory,
      method: input.method,
      links: input.links,
      image: input.image,
    };
    try {
      axios
        .post("http://localhost:3001/create", newRecipe)
        .then(
          setTimeout(() => {
            setRespons(true);
          }, 500)
        )
        .then(
          setTimeout(() => {
            setRespons(false);
          }, 3000)
        )
        .then(
          setTimeout(() => {
            event.target.parentElement[1].value = "";
          }, 3000)
        )
        .then(
          setTimeout(() => {
            setInput({
              title: "",
              catagory: "",
              method: "",
              links: "",
              image: "",
            });
          }, 3000)
        );
    } catch {
      console.log("error");
    }
  };
  useEffect(() => {
    console.log(respons);
  }, [respons]);

  return (
    <div className="upload-page container">
      {!respons ? (
        ""
      ) : (
        <div className="upload-response">
          <h1>recipe uploaded!</h1>
        </div>
      )}
      <h1>Upload a recipe</h1>
      <form>
        <input
          required
          value={input.title}
          onChange={handleChange}
          type="text"
          placeholder="Recipe name"
          name="title"
        />
        <select onChange={handleChange} required name="catagory">
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
