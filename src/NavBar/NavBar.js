import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <header>
        <div className="brand">
          <h1>Aaron Endsley</h1>
        </div>
        <nav>
          <Link to="/">
            <button type="button">
              {"</Back>"}
            </button>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
