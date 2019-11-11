import React, { Component } from 'react'
import GameRow from './GameRow'
import seedGrid from './seedGrid'

class GameGrid extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sideLength: 20,
      intervalLength: 100,
      grid: [],
      playing: false
    }
  }

  componentDidMount() {
    this.seedNewGrid()
  }

  togglePlaying = () => {
    this.setState((prevState) => {
      return { playing: !prevState.playing }
    })
  }

  startGameClock = () => {
    this.togglePlaying()
    this.gameClock = setInterval(() => {
      this.updateGrid()
    }, this.state.intervalLength)
  }

  stopGameClock = () => {
    this.togglePlaying()
    clearInterval(this.gameClock)
  }

  updateGrid = () => {
    const nextGrid = this.drawNextGrid()
    this.setState({
      grid: nextGrid
    })
  }

  drawNextGrid = () => {
    const sideLength = this.state.sideLength
    const outputGrid = Array.from(Array(sideLength), () => new Array(sideLength))
    this.state.grid.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        const aliveNeighborCount = this.countAliveNeighbors(rowIndex, cellIndex)
        outputGrid[rowIndex][cellIndex] = this.getNextCell(cell, aliveNeighborCount)
      })
    })
    return outputGrid
  }

  countAliveNeighbors = (row, col) => {
    const allNeighbors = []
    const neighborCoords = [
      [row-1, col-1], [row-1, col], [row-1, col+1],
      [row, col-1], /* THIS CELL */ [row, col+1],
      [row+1, col-1], [row+1, col], [row+1, col+1],
    ]

    neighborCoords.forEach(coords => {
      if (this.state.grid[coords[0]] && this.state.grid[coords[0]][coords[1]]) {
        allNeighbors.push(this.state.grid[coords[0]][coords[1]])
      }
    })

    return allNeighbors.filter(n => n === 1).length
  }

  getNextCell = (cell, aliveNeighbors) => {
    const cellIsAlive = cell === 1
    if (cellIsAlive && (2 <= aliveNeighbors && aliveNeighbors <= 3)) {
      return 1
    } else if (!cellIsAlive && aliveNeighbors === 3) {
      return 1
    }
    return 0
  }

  seedNewGrid = () => {
    const flatCells = []
    const cellCount = this.state.sideLength * this.state.sideLength
    for (var i = 0; i < cellCount; i++) {
      flatCells[i] = Math.round(Math.random())
    }
    const newGrid = []
    while(flatCells.length) newGrid.push(flatCells.splice(0,this.state.sideLength))
    this.setState({ grid: newGrid })
  }

  render() {
    const allRows = this.state.grid.map((row, index) => {
      return <GameRow row={row} rowIndex={index} key={`row-${index}`} />
    })

    return (
      <div className="ui four wide column game-grid">
        {allRows}
        { this.state.playing ?
          <button onClick={this.stopGameClock}><i className="pause icon" /></button>
          :
          <button onClick={this.startGameClock}><i className="play icon" /></button>
        }
        <button onClick={this.seedNewGrid}>New Flying Formation!</button>
      </div>
    )
  }
}

export default GameGrid
