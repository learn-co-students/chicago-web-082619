import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cone from './Cone.js'

function App(props) {
  console.log(props)

  let myCones = ""

  for (var i = 0; i < props.numOfCones; i++) {
    myCones += <Cone iceCreamType={props.favIceCream} eatenCount={props.numOfCones} />
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and YEET to refresh automagically.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>My favorite ice cream is {props.favIceCream}, I've had {props.numOfCones} cone{
          props.numOfCones == 1
            ? ""
            : "s"
        } today!</p>
        <Cone iceCreamType={props.favIceCream} eatenCount={props.numOfCones} />
        // {myCones}
      </header>
    </div>
  );
}

export default App;
