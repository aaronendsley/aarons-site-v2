import React, { Component } from "react";
import { Link } from "react-router-dom";
import navProfilePic from "../images/face.jpg";
import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navState: false,
      navClass: "navClose"
    };
    this.navToggle = this.navToggle.bind(this);
  }
  navToggle() {
    console.log("click");
    if (this.state.navState) {
      this.setState(() => ({
        navClass: "navClose",
        navState: false
      }));
    } else {
      this.setState(() => ({
        navClass: "navOpen",
        navState: true
      }));
    }
  }
  render() {
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
          <button className="menuButton" type="button" onClick={this.navToggle}>
            &#9776;
          </button>
        </header>
        <div className={this.state.navClass}>
          <p>ON</p>
        </div>
      </div>
    );
  }
}

export default NavBar;
