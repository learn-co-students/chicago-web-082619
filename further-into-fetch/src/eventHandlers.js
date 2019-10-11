const pokemonContainer = document.querySelector('#pokemon-container')

function handleSearchInput(event, allPokemonData, pokemonContainer) {
  const filteredPokes = allPokemonData.filter(pokeObj => {
    return pokeObj.name.includes(event.target.value.toLowerCase())
  })
  const filteredPokeHTML = renderAllPokemon(filteredPokes) 
  pokemonContainer.innerHTML = filteredPokeHTML ? filteredPokeHTML : `<p><center>There are no Pokémon here</center></p>`
}


function handleContainerClick(event, allPokemonData) {
  if (event.target.dataset.action === 'flip') {
    handleImageClick(event, allPokemonData)
  } else if (event.target.dataset.action === 'delete') {
    handleDelete(event)
  }
}

function handleDelete(event) {
  const reqObj = {
    method: 'DELETE'
  }
  const pokeId = event.target.dataset.id

  fetch(`http://localhost:3000/pokemon/${pokeId}`, reqObj)
    .then(resp => resp.json() )
    .then(data => {
      console.log('deleterd', data)
      event.target.parentNode.parentNode.remove()
    })

  // scrape the id of the pokemon that got clicked
  // assmble url with id
  // make fetch request
  // remove the div that the delete btn belonged to
}



function handleImageClick(event, allPokemonData) {
    const clickedPokemon = allPokemonData.find((pokemonObject) => pokemonObject.id == event.target.dataset.id)
    event.target.src = (event.target.src === clickedPokemon.sprites.front ? clickedPokemon.sprites.back : clickedPokemon.sprites.front)
}






/************************* POST New Pokemon **********************/

function createNewPokemon(event) {
  event.preventDefault()
  const formData = grabFormData()
  postNewPokemon(formData)
}

function postNewPokemon(formData){
  const reqObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  }

  fetch('http://localhost:3000/pokemon', reqObj)
    .then(resp => resp.json())
    .then(pokeObj => {
      const pokeHtml = renderSinglePokemon(pokeObj)
      pokemonContainer.insertAdjacentHTML( 'beforeend', pokeHtml);
    })
}

function grabFormData() {
  nameInput = document.querySelector('#name-input')
  const name= nameInput.value

  spriteInput = document.querySelector('#sprite-input')
  const sprite = spriteInput.value
  return {
    name: name,
    sprites: { front: sprite } 
  }
}




















/************************* Helper Fns for Producing HTML **********************/

function renderAllPokemon(pokemonArray) {
  return pokemonArray.map(renderSinglePokemon).join('')
}



function renderSinglePokemon(pokemon) {
  return (`
  <div class="pokemon-card">
    <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div class="pokemon-image">
        <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
      </div>
      <button data-id="${pokemon.id}" data-action="delete" class="pokemon-button">Delete</button>
    </div>
  </div>`)
}

