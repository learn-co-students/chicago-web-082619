Rails.application.routes.draw do
  resources :orders, only: [:new,:create,:show]
  resources :diners
  resources :meals
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
