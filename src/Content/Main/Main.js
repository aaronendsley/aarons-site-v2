import React from "react";
import "./Main.css";

const Main = props => {
  const faq = props.faq;
  return (
    <div className="pageContent">
      <h1>
        {faq.title}
      </h1>
      {faq.paragraphs.map(item =>
        <div key={item.key} className="section">
          <h2>
            {item.subtitle}
          </h2>
          {item.sections.map(item =>
            <p key={item.key}>
              {item.paragraph}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Main;
