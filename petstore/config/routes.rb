Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/welcome', to: 'application#welcome'
  # get '/pets', to: 'pets#index'
  # get '/pets/new', to: 'pets#new'
  # ...you get the idea. simpler way:

  resources :pets, except: [:destroy]
end
