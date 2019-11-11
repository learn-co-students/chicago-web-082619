import React, { Component } from 'react'
import GameCell from './GameCell'

class GameRow extends Component {
  render() {
    const allCells = this.props.row.map((cell, index) => {
      return <GameCell cell={cell} rowIndex={this.props.rowIndex} cellIndex={index} key={`row-${this.props.rowIndex}-cell-${index}`} />
    })

    return (
      <div className="game-row">
        {allCells}
      </div>
    )
  }
}

export default GameRow
