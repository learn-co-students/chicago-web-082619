class SnailsController < ApplicationController
  def index
    @snails = Snail.all
  end

  def new
    @snail = Snail.new
  end

  def create
    @snail = Snail.new(snail_params)
    if @snail.valid?
      @snail.save
      redirect_to @snail
    else
      flash[:errors] = @snail.errors.full_messages
      redirect_to new_snail_path
      # render :index
    end
  end

  def show
    @snail = Snail.find(params[:id])
  end

  private

  def snail_params
    params.require(:snail).permit(:name, :breed, :shell_size)
  end
end
