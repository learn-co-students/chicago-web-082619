import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }


  }

  componentDidMount() {
    fetch('/api/pets')
    .then(res => res.json())
    .then(pets => this.setState({pets: pets}))
  }

  render() {
    const pets = [
    { age: 3,
      gender: "male",
      id: "2c902312-dfa3-446f-8b4b-5e115170d807",
      isAdopted: false,
      name: "Teddy",
      type: "cat",
      weight: 1
    },
    { age: 2,
      gender: "male",
      id: "6057de4f-6725-4b9f-a0b1-1f3bd3ad04a6",
      isAdopted: true,
      name: "Hemingway",
      type: "cat",
      weight: 5
    }]
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
