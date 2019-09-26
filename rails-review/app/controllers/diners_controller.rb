class DinersController < ApplicationController

  def show
    @diner = Diner.find(params[:id])
  end
end
