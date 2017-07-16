import React from "react";
import { Link } from "react-router-dom";
import navProfilePic from "../images/face.jpg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <header>
        <div className="brand">
          {" "}<h1>{"<Aaron Endsley/>"}</h1>
          <div className="imageFloat2">
            <div className="imgContainer2">
              <img src={navProfilePic} alt={`Aaron Endsley`} />
            </div>
          </div>
        </div>
        <button className="menuButton" type="button">
          &#9776;
        </button>
      </header>
    </div>
  );
};

export default NavBar;
