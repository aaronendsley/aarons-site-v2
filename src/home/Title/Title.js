import React from 'react';
import './Title.css';

const Title = () => {
  const title = ['let person = {', '"Name": "Aaron Endsley",', '"Description" : "Front End Web Dev"', '}'];
  return (
    <div className="Title">
      <div className="innerTitleDiv">
        {title.map(item =>
          <h1>
            {item}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Title;
