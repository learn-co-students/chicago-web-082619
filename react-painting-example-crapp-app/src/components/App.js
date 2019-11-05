import React, { Component } from 'react';
import Navbar from './Navbar';
import About from './About';
import PaintingsContainer from './PaintingsContainer';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar
          title="Painterest"
          description="our app"
          icon="paint brush"
        />
        <div className="ui container grid">
          <div id="content" className="sixteen wide column">
            <Switch>
              <Route path='/about' component={About} />
              <Route path='/' component={PaintingsContainer} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
