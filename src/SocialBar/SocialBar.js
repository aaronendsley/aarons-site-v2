import React, { Component } from 'react';
import './SocialBar.css';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import { SocialMediaLinks } from '../data.json';

class SocialBar extends Component {
  constructor(props) {
    super(props);
    this.social = SocialMediaLinks.social;
    this.rGithub = this.rGithub.bind(this);
    this.rLinkedIn = this.rLinkedIn.bind(this);
    this.rTwitter = this.rTwitter.bind(this);
    this.findAndReturn = this.findAndReturn.bind(this);
  }

  rGithub() {
    return <FaGithubSquare />;
  }
  rLinkedIn() {
    return <FaLinkedinSquare />;
  }

  rTwitter() {
    return <FaTwitterSquare />;
  }

  findAndReturn(itemName) {
    let itemToReturn;
    switch (itemName) {
      case 'Linked-In':
        itemToReturn = this.rLinkedIn;
        break;
      case 'Github':
        itemToReturn = this.rGithub;
        break;
      case 'Twitter':
        itemToReturn = this.rTwitter;
        break;
      default:
        console.error(`No such Item as ${itemName} found`);
    }
    return itemToReturn;
  }

  render() {
    return (
      <div className="socialBarContainer">
        {this.social.map(item => {
          let renIcon = this.findAndReturn(item.siteName);
          return (
            <a target="blank" href={item.siteLink} key={item.siteName}>
              <button className="socialBarChild">
                {renIcon()}
              </button>
            </a>
          );
        })}
      </div>
      
    );
  }
}
export default SocialBar;
