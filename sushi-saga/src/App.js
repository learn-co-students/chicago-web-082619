import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      sushis: [],
      page: 0,
      budget: 100,
      plates: 0
    }
  }

  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        const sushis = data.map(sushi => {
          return {
            ...sushi,
            isEaten: false
          }
        })

        this.setState({
          sushis: sushis
        })
      })
  }

  handleMore = () => {
    this.setState({
      page: this.state.page + 1
    })
  }

  handleEaten = (selectedSushi) => {
    if(this.state.budget < selectedSushi.price || selectedSushi.isEaten) {
      return
    }

    const updatedSushis = this.state.sushis.map(sushi => {
      if (sushi.id === selectedSushi.id) {
        return {
          ...sushi,
          isEaten: true
        }
      } else {
        return sushi
      }
    })

    this.setState((prevState) => ({
      sushis: updatedSushis,
      budget: prevState.budget - selectedSushi.price,
      plates: prevState.plates + 1
    }));
  }

  render() {
    console.log('appstate', this.state)
    const menuItems = this.state.sushis.slice(this.state.page * 4, (this.state.page + 1) * 4)

    return (
      <div className="app">
        <SushiContainer 
          menuItems={menuItems} 
          handleEaten={this.handleEaten}
          handleMore={this.handleMore} />
          <Table 
            budget={this.state.budget}
            plates={this.state.plates} />
      </div>
    );
  }
}

export default App;
