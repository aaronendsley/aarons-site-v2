import React from 'react';
import './GitCard.css';

const GitCard = props => {
  const gitInfo = props.gitInfo;
  return (
    <a href={gitInfo.url}>
      <div className="gitWrapper">
        <div className="nameContainer">
          <div className="projectName">
            <h2>{gitInfo.name}</h2>
            <hr />
          </div>
        </div>
        <div>
          <div className="mainLanguage">
            <h3>{gitInfo.language}</h3>
          </div>
          <div className="projectDescription">
            <p>{gitInfo.description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default GitCard;
