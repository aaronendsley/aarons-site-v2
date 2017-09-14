import React, { Component } from 'react';
import GitCard from './githubCard/GitCard';
import { get } from 'axios';
import './Github.css';

class Github extends Component {
  constructor(props) {
    super();
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    get('https://api.github.com/users/VeritasX/repos').then(response => {
      const finalData = response.data.filter(item => !item.fork).map(item => {
        let newObj = {
          name: item.name,
          url: item.html_url,
          language: item.language,
          description: item.description
        };
        return newObj;
      });
      this.setState({
        data: finalData
      });
    });
  }

  render() {
    let hasData = <p>No data here</p>;

    if (Array.isArray(this.state.data)) {
      hasData = this.state.data.map(item => <GitCard gitInfo={item} key={item.name} />);
    }

    return (
      <div>
        <h1>Projects: From Web Development to Graphic Design</h1>
        <h2>Web Development Projects</h2>
        <div className="gitHContainer">{hasData}</div>
      </div>
    );
  }
}

export default Github;
