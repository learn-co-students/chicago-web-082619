class AirportsController < ApplicationController
  before_action :find_airport, only: [:show, :edit, :update, :destroy]

  def index
    @airports = Airport.all
  end

  def show
  end

  def new
    @airport = Airport.new
  end

  def create
    @airport = Airport.new(airport_params)
    # @airport = Airport.new(name: params[:airport][:name], location: params[:airport][:location])
    @airport.save
    # redirect_to airport_path(@airport)
    redirect_to @airport
  end

  def edit
  end

  def update
    @airport.update(airport_params)
    redirect_to @airport
  end

  def destroy
    @airport.destroy
    redirect_to airports_path
  end

  private

  def airport_params
    params.require(:airport).permit(:name, :location)
  end

  def find_airport
    @airport = Airport.find(params[:id])
  end
end
