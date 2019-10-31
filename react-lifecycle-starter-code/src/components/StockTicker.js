import React, { Component } from 'react'

class StockTicker extends Component {
  state = {
    price: 54,
    color: "red"
  }

  generateRandomStock = () => {
    return Math.floor(Math.random() * 89) + 10
  }

  componentDidMount(){
    this.stockInterval = setInterval(() => {
      this.setState({
        price: this.generateRandomStock()
      })
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.stockInterval)
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.price < this.state.price) {
      this.setState({
        color: "green"
      })
    } else if (prevState.price > this.state.price){
      this.setState({
        color: "red"
      })
    } else {
      return true
    }
  }

  render () {
    return (
      <div className="app-children">
        <div id="ticker">
          <h2>Flatiron</h2>
          <div style={{color: this.state.color}}>
            {this.state.price}
          </div>
        </div>
      </div>
    )
  }
}

export default StockTicker
