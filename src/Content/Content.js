import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Main from './Main/Main';
import Github from './GitHub/Github';
import Resources from './Resources/Resources';
import Podcasts from './Podcasts/Podcasts';
import './Content.css';

class Content extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <NavBar pageLinks={this.props.pageLinks} />
        <div className="topSpacer">
          <Switch>
            <Route exact path="/content" component={Main} />
            <Route path="/content/github" component={Github} />
            <Route path="/content/resources" component={Resources} />
            <Route path="/content/podcasts" component={Podcasts} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Content;
