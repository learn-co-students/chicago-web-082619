import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux'


// reducer is the function that gets passed to the store when it is created.
// reducer is invoked whenever the store is dispatched an action
// reducer gets passed the current state and the action that got dispatched
// reducer's responsibility is to propduce the next state based on the action and the current state


const initialState = { count: 0 }

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}



const store = createStore(reducer)





class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  } 
}


class Header extends Component {
  componentDidMount(){
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{store.getState().count}</h2>
      </header>
    );
  }
}

class Counter extends Component {
  componentDidMount(){
    store.subscribe(() => this.forceUpdate())
  }

  increment = () => {
    const action = { type: 'INCREMENT' }
    store.dispatch(action)
  };

  random = () => {
    const action = { type: 'RANDOM' }
    store.dispatch(action)
  };

  decrement = () => {
    const action = { type: 'DECREMENT' }
    store.dispatch(action)

    // dispatch an action 
    // action goes to the reducer
    // the reducer changes the state based on that action
    // reducer returns a new state
    // any component listening (i.e subscribing to the part of the state will rerender)
  };

  render() {
    return (
      <div className="Counter">
        <h1>{ store.getState().count }</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
        <button onClick={this.random}> random </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));




