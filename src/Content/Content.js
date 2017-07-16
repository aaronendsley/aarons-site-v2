import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './Content.css';

class Content extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="githubBoxes topSpacer">
          <h1>This is placeholder Markup</h1>
        </div>
      </div>
    );
  }
}

export default Content;
