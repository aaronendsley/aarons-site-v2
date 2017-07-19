import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navProfilePic from '../images/face.jpg';
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navState: false,
      navClass: 'navClose'
    };
    this.navToggle = this.navToggle.bind(this);
    this.navIconClosed = this.navIconClosed.bind(this);
    this.navIconOpen = this.navIconOpen.bind(this);
    this.navIcon = this.navIconClosed();
    this.Links = props.pageLinks;
    console.log(this.Links);
  }

  navToggle() {
    if (this.state.navState) {
      this.navIcon = this.navIconClosed();
      this.setState(() => ({
        navClass: 'navClose',
        navState: false
      }));
    } else {
      this.navIcon = this.navIconOpen();
      this.setState(() => ({
        navClass: 'navOpen',
        navState: true
      }));
    }
  }
  navIconClosed() {
    return (
      <button className="menuButton" type="button" onClick={this.navToggle}>
        &#9776;
      </button>
    );
  }
  navIconOpen() {
    return (
      <button className="menuButton" type="button" onClick={this.navToggle}>
        X
      </button>
    );
  }
  render() {
    return (
      <div>
        <div className="navBarContainer">
          <div>
            <header>
              <div className="brand">
                <h1>
                  {'<Aaron Endsley/>'}
                </h1>
                <div className="imageFloat2">
                  <div className="imgContainer2">
                    <Link to="/">
                      <img src={navProfilePic} alt={`Aaron Endsley`} />
                    </Link>
                  </div>
                </div>
              </div>
              {this.navIcon}
            </header>
          </div>
        </div>
        <div className={this.state.navClass}>
          <div className="navContent">
            {this.Links.map(items =>
              <li key={items.key} onClick={this.navToggle}>
                <h3>
                  {items.linkName}
                </h3>
              </li>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
