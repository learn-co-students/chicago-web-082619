class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  def current_user
    if session[:current_user]
      @user = User.find(session[:current_user])
    else
      session[:current_user] = nil
      nil
    end
  end

  def logged_in?
    !!current_user
  end

  def authorized
    redirect_to signin_path unless logged_in?
  end
end
