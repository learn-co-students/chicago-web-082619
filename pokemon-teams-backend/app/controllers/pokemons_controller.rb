class PokemonsController < ApplicationController
  def index
    render :json => Pokemon.all
  end

  def update
    # params => { id: 4, pokemon: { id: 4, species: "...", nickname: "...", trainer_id: 1}}

    pokemon = Pokemon.find(params[:id])
    pokemon.update(pokemon_params)

    render :json => pokemon
  end

  def pokemon_params
    params.require(:pokemon).permit(:species, :nickname, :trainer_id)
  end
end
