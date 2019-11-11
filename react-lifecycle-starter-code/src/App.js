import React, { Component } from 'react';

import WidgetSelector from './components/WidgetSelector'
import RandomKoala from './components/RandomKoala'
import DigitalClock from "./components/DigitalClock"
import StockTicker from "./components/StockTicker"
class App extends Component {

  state = {
    koala: "",
    widget: "clock"
  }

  // constructor(){
  //   super()
  //   // console.log("App constructed")
  // }

  switchWidget = () => {
    if (this.state.widget == "clock") {
      this.setState({
        widget: "stock"
      })
    } else {
      this.setState({
        widget: "clock"
      })
    }
  }
  componentDidMount(){
    fetch("http://localhost:3001/koalas")
    .then(resp => resp.json())
    .then(koalaData => {
      console.log(koalaData)
      this.setState({
        koala: koalaData[0]["image_url"]
      })
    })
  }
  render() {
    return (
      <div id='app'>
        {/* <RandomKoala koala={this.state.koala}/> */}
        <WidgetSelector switchWidget={this.switchWidget}/>
        {this.state.widget == "clock" ? <DigitalClock /> : <StockTicker />}

      </div>
    )
  }
}


export default App;
