import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import LightMode from "../LightMode/LightMode";

const Navbar = () => {
  return (
    <>
      <nav>
        {/* <div>
          <h2>name of website</h2>
        </div> */}
        <Link to={"/"}>
          <h4>Home</h4>
        </Link>
        <Link to={"/recipes"}>
          <h4>Trending</h4>
        </Link>
        <Link to={"/create"}>
          <h4>Upload</h4>
        </Link>
        <Link to={"/search"}>
          <h4>Search</h4>
        </Link>
        <LightMode />
      </nav>
    </>
  );
};

export default Navbar;
