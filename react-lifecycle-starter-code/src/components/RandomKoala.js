import React, { Component } from 'react'

class RandomKoala extends Component {
  // constructor(){
  //   super()
  //   console.log("Koala constructed")
  // }
  // componentDidMount(){
  //   console.log("Koala mounted")
  // }
  render () {
    // console.log("Koala rendered")
    return (
      <div className="app-children">
        <img src={this.props.koala} />
      </div>
    )
  }
}

export default RandomKoala
