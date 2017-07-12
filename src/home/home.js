import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="homeBody topSpacer">
      <h1>This is the beginning</h1>
      <Link to="/github">
        <button type="button">go here</button>
      </Link>
    </div>
  );
};

export default Home;
