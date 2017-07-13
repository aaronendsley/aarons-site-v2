import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="homeBody">
      <h1>This is the beginning</h1>
      <div className="buttonGit">
        <Link to="/github">
          <button type="button">I do things</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
