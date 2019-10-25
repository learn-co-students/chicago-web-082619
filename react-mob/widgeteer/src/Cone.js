import React, { Component } from 'react';

class Cone extends Component {
  constructor(propsInConst) {
    super()
    this.iceCream = propsInConst.iceCreamType
  }

  render() {
    const props = this.props
    console.log(props)
    return (
      <h1> I am a {this.iceCream} cone! I have been eaten {props.eatenCount} times today!</h1>
    )
  }
}

export default Cone;
