import React from 'react';
import todoro from './todoro.png';
import './App.css';
import TodosContainer from './TodosContainer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={todoro} className="App-logo" alt="logo" />
        <div className="App-name">
          <h1>Todoro.</h1>
          <p>Do you like tasks, user?</p>
          <p>Even pending ones?</p>
        </div>
      </header>
      <TodosContainer />
    </div>
  );
}

export default App;
