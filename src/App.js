import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home/home";
import GitHub from "./GitHub/GitHub";
import FourOhFour from "./FourOhFour/FourOhFour";
import data from "./data.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      title: data.title,
      about: data.about,
      social: data.socialMediaLinks
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              component={props => <Home titleText={this.state.title} />}
            />
            <Route path="/github" component={GitHub} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
