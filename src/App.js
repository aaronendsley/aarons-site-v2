import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './home/home';
import Content from './Content/Content';
import FourOhFour from './FourOhFour/FourOhFour';
import SocialBar from './SocialBar/SocialBar';
import data from './data.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      title: data.title,
      about: data.About,
      social: data.socialMediaLinks,
      links: data.links,
      faq: data.Faq,
      scrollTop: () => {
        window.scroll(0, 0);
      }
    };
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <SocialBar />
          <Switch>
            <Route
              exact
              path={this.state.links[0].linkRoute}
              component={props =>
                <Home titleText={this.state.title} aboutSection={this.state.about} scrollTop={this.state.scrollTop} />}
            />
            <Route
              path="/content"
              component={props =>
                <Content pageLinks={this.state.links} scrollTop={this.state.scrollTop} faq={this.state.faq} />}
            />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
export default App;
