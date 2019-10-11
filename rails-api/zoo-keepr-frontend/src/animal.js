class Animal {
  constructor(animalObj) {
    this.name = animalObj.name;
    this.gender = animalObj.gender;
    this.speciesId = animalObj.species_id;
  }

  render() {
    return `
    <tr>
      <td>${this.name}</td>
      <td>${this.gender}</td>
      <td>${this.speciesId}</td>
    </tr>
    `;
  }
}
