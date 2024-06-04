Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :tipo_prodotto, only: [:index, :show, :create, :update, :destroy]
      resources :prodotto, only: [:index, :show, :create, :update, :destroy]
      resources :utenti, only: [:index, :show, :create, :update, :destroy] do
        collection do
          get 'show_by_username/:username', to: 'utenti#show_by_username', as: :show_by_username
        end
      end
    end
  end
  get "up" => "rails/health#show", as: :rails_health_check
end
