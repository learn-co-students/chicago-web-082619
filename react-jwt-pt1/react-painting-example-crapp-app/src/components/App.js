import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Login from './Login';
import PaintingsContainer from './PaintingsContainer';
import PaintingsNew from './PaintingsNew';
import PaintingShow from './PaintingShow';

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: {}
    }
  }

  handleLogin(user){
    localStorage.setItem('token', user.token)

    this.setState({
      auth: user
    })
  }

  handleLogout(){
    localStorage.removeItem('token')

    this.setState({
      auth: {} 
    })
  }

  render() {
    return (
      <div>
        <Navbar
          color="green"
          title="Painterest"
          description="our app"
          icon="paint brush"
          handleLogout={() => this.handleLogout()}
          user={this.state.auth}
        />
        <div className="ui container grid">
          <div id="content" className="sixteen wide column">
            <Route exact path="/" render={(routeParams) => {
              return <About {...routeParams} user={this.state.auth} handleLogin={(user) => this.handleLogin(user)}/>
            }} />
            <Route exact path="/paintings" render={(routeParams) => {
              return <PaintingsContainer {...routeParams} user={this.state.auth} />
            }} />

            <Route path="/login" render={(routeParams) => {
              return <Login {...routeParams} handleLogin={(user) => this.handleLogin(user)} />
            }} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

