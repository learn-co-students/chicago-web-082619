import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    console.log(this.props.pets)

    const allPets = this.props.pets.map(pet => {
      return <Pet pet={pet} key={pet.id} />
    })
    console.log(allPets)
    return (
      <div className="ui cards">{ allPets.length > 0 ? allPets : 'Currently FETCHing pets! Arf Arf! (dog laugh sound)'}</div>
    )
  }
}

export default PetBrowser
