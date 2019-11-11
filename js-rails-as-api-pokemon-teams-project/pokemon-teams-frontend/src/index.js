const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded', function() {
  console.log("two")
  // fetch(TRAINERS_URL)
  //   .then((res) => {
  //     console.log(res)
  //     return res.json()
  //   })
  //   .then((trainers) => {
  //     doSomethingWith(trainers)
  //   });


  fetch(POKEMONS_URL)
    .then((res) => {
      console.log(res)
      return res.json()
    })
    .then((pokemons) => {
      console.log(pokemons)
      renderPokemon(pokemons)
    });

  function renderPokemon(pokemonObjects) {
    list = document.getElementsByClassName("pokemons-list")[0]
    pokemonObjects.forEach(function(pokemon) {
      pokemonElement =`<p id="pokemon-${pokemon.id}" data-nickname="${pokemon.nickname}" data-trainer-id="${pokemon.trainer_id}" data-id="${pokemon.id}" data-species="${pokemon.species}">ID ${pokemon.id}: ${pokemon.species} - Nicknamed ${pokemon.nickname} - Trainer ID ${pokemon.trainer_id}</p>`
      list.innerHTML += pokemonElement

      // var pTag = document.createElement("P")
      // var pText = document.createTextNode(`ID ${pokemon.id}: ${pokemon.species} - Nicknamed ${pokemon.nickname} - Trainer ID ${pokemon.trainer_id}`)
      // pTag.appendChild(pText)
      // list.appendChild(pTag)
    })

    setPokemonListeners()
  }

});

function setPokemonListeners() {
  pokemonsElements = document.querySelectorAll(".pokemons-list p")
  console.log(pokemonsElements)

  for (const poke of pokemonsElements) {
    poke.addEventListener('click', function(event) {

      const species = event.target.dataset.species;
      const trainerId = event.target.dataset.trainerId;
      const id = event.target.dataset.id;
      const nickname = event.target.dataset.nickname + "!";
      const pokemonObject = {
        id: id,
        trainer_id: trainerId,
        species: species,
        nickname: nickname
      }

      updatePokemon(pokemonObject)
    })
  }

  function updatePokemon(pokemon) {
    fetch(`${POKEMONS_URL}/${pokemon.id}`, {
      method: 'PATCH',
      body: JSON.stringify({pokemon: pokemon}), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then((updated) => {
        // iterate through page's pokemon
        // if pokemon updated has same id as page pokemon
        // change page pokemon to reflect updated pokemons
        pokemonsElements = document.querySelectorAll(".pokemons-list p")
        pokemonsElements.forEach(function(pokeEl) {
          console.log(pokeEl.dataset.id, updated.id)
          if (pokeEl.dataset.id == updated.id) {
            newElement =`ID ${updated.id}: ${updated.species} - Nicknamed ${updated.nickname} - Trainer ID ${updated.trainer_id}`


            console.log(pokeEl.parentNode)
            pokeEl.innerHTML = newElement
            pokeEl.setAttribute('data-nickname', updated.nickname)
          }
        })
      })
  }
}

console.log("one")
