import React from "react";
import "./Title.css";

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
    </div>
  );
};

export default Title;
