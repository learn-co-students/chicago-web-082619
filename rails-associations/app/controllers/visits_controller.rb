class VisitsController < ApplicationController
  def new
    @visit = Visit.new
    @doctors = Doctor.all
  end

  def create
    p params
    visit = Visit.new(visit_params)
    if visit.save
      redirect_to visit_path(visit)
    else
      p visit.errors.full_messages
      @errors = visit.errors.full_messages
      @doctors = Doctor.all
      render :new and return
    end
  end

  def show
    @visit = Visit.find_by(id: params[:id])
  end

  private
  def visit_params
    params.require(:visit).permit([:reason, :doctor_id ])
  end
end
