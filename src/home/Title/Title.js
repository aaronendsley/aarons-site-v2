import React from 'react';
import './Title.css';
import profilePic from './../../images/face.jpg';

const Title = props => {
  const titleText = props.titleText;
  return (
    <div className="Title">
      <div className="innerTitleDiv">
        {titleText.map(item =>
          <h1 key={item.key}>
            {item.title}
          </h1>
        )}
      </div>
      <div className="imgFloat">
        <div className="imgContainer">
          <img src={profilePic} alt={`Aaron Endsley`} />
        </div>
      </div>
    </div>
  );
};

export default Title;
