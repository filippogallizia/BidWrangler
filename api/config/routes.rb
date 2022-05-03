Rails.application.routes.draw do
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, :defaults => { :format => :json }
      resources :items, :defaults => { :format => :json }
      mount ActionCable.server => '/cable'



    end
  end
  

  # Defines the root path route ("/")
  # root "articles#index"
end
