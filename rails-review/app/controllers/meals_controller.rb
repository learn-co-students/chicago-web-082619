class MealsController < ApplicationController
  def new
    @meal = Meal.new
  end

  def create
    @meal = Meal.new(meal_params)
    if @meal.valid?
      @meal.save
      redirect_to @meal
    else
      flash[:errors] = @meal.errors.full_messages
      redirect_to new_meal_path
    end
  end

  def show
    @meal = Meal.find(params[:id])
  end

  def index
    @meals = Meal.all
  end

  private

  def meal_params
    params.require(:meal).permit(:name, :category)
  end
end
