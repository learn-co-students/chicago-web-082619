class AnimalsController < ApplicationController
  def create
    @species = Species.find_or_create_by(name: params[:species])
    @animal = Animal.create(
      name: params[:animal][:name],
      gender: params[:animal][:gender].to_i,
      species_id: @species.id
    )
    render json: { message: 'success', data: @animal }
  end

  def show
  end

  def index
    @animals = Animal.all
    render json: { message: 'success', data: @animals}
  end
end
