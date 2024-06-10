Rails.application.routes.draw do
  get 'sessions/create'
  namespace :api do
    namespace :v1 do
      resources :tipo_prodotto, only: [:index, :show, :create, :update, :destroy]
      resources :prodotto, only: [:index, :show, :create, :update, :destroy]
      resources :utenti
      get 'show', to: 'utenti#show'
    end
  end
  get "up" => "rails/health#show", as: :rails_health_check
end