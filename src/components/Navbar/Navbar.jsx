import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import LightMode from "../LightMode/LightMode";

const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>
        <h4>Home</h4>
      </Link>
      <Link to={"/recipes"}>
        <h4>Trending</h4>
      </Link>
      <Link to={"/create"}>
        <h4>Upload Recipe</h4>
      </Link>
      <LightMode />
    </nav>
  );
};

export default Navbar;
