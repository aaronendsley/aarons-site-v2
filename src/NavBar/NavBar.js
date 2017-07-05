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
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/github">GitHub</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
