Rails.application.routes.draw do
  resources :invoices
  resources :product_carts
  resources :products
  resources :carts
  resources :users
  get '/hello', to: 'application#hello_world'

  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'

  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end