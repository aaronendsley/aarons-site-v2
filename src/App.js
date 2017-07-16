import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home/home';
import Content from './Content/Content';
import FourOhFour from './FourOhFour/FourOhFour';
import data from './data.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      title: data.title,
      about: data.About,
      social: data.socialMediaLinks
    };

    console.log();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              component={props => <Home titleText={this.state.title} aboutSection={this.state.about} />}
            />
            <Route path="/more" component={Content} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
