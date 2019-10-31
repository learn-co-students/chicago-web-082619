import React, { Component } from 'react'

class DigitalClock extends Component {
  state = {
    time: "11:00 AM"
  }

  currentTime = () => {
    let now = new Date()
    return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
  }

  componentDidMount(){
    this.clockInterval = setInterval(() => {
      console.log("tick")
      this.setState({
        time: this.currentTime()
      })
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.clockInterval)
  }

  render () {
    return (
      <div className="app-children">
        <h2 id="digital">
          {this.state.time}
        </h2>
      </div>
    )
  }
}

export default DigitalClock
