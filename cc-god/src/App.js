import React from 'react';
import './App.css';
import GameGrid from './GameGrid'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>(Charlie) Conway's Game of [Duck]</h1>
      </header>
      <GameGrid />
    </div>
  );
}

export default App;
