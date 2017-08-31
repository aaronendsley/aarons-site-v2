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
    this.data;
  }

  componentDidMount() {
    this.data = get('https://api.github.com/users/VeritasX/repos').then(response => {
      this.setState({
        data: response.data
      });
    });
  }

  render() {
    let hasData = <p>No data here</p>;

    if (Array.isArray(this.state.data)) {
      hasData = <p>Lol there is data</p>;
    }

    return (
      <div>
        <h1>Projects: From Web Development to Graphic Design</h1>
        {hasData}
      </div>
    );
  }
}

export default Github;
