class PetsController < ApplicationController

  def index
    @pets = Pet.all
  end

  def new
  end

  def show
    p params
    @pet = find_pet
  end

  def find_pet
    Pet.find_by(id: params[:id])
  end
end
