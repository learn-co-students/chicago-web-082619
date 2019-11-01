import React from 'react'
import ducky from './ducky.svg'
// import hawky from './hawky.svg'
import pucky from './pucky.svg'

function GameCell(props) {
  const alive = props.cell === 1
  const image = ( alive ? ducky : pucky )
  const alt = ( alive ? "a green duck" : "a purple puck")
  return <img src={image} alt={alt} />
}

export default GameCell
