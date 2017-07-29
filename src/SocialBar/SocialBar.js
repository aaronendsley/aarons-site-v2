import React, { Component } from "react";
import "./SocialBar.css";
import { SocialMediaLinks } from "../data.json";

class SocialBar extends Component {
  constructor(props) {
    super(props);
    this.social = SocialMediaLinks.social;
  }

  render() {
    return (
      <div className="socialBarContainer">
        {this.social.map(item =>
          <a target="blank" href={item.siteLink} key={item.siteName}>
            <button className="socialBarChild">
              {item.siteName}
            </button>
          </a>
        )}
      </div>
    );
  }
}
export default SocialBar;
