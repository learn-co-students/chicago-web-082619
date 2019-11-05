import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const sushis = props.menuItems.map(sushi => {
    return <Sushi sushi={sushi} handleEaten={props.handleEaten} />
  })

  return (
    <Fragment>
      <div className="belt">
        {
          sushis
        }
        <MoreButton handleMore={props.handleMore} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
