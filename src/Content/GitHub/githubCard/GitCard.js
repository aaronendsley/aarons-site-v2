import React from 'react';
import './GitCard.css';

const GitCard = props => {
  const gitInfo = props.gitData;
  return (
    <div className="gitWrapper">
      <div className="projectName">
        <h2>{gitInfo.projectName}</h2>
      </div>
      <hr />
      <div className="mainLanguage">
        <h3>{gitInfo.projectLanguage}</h3>
      </div>
      <div className="projectDescription">
        <p>{gitInfo.projectDescription}</p>
      </div>
    </div>
  );
};

export default GitCard;
