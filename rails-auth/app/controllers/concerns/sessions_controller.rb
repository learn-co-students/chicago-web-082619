class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      session[:current_user] = @user.id
      redirect_to @user
    else
      redirect_to signin_path
    end
  end

  def destroy
    session.delete(:current_user)
    redirect_to signin_path
  end
end
