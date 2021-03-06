Rails.application.routes.draw do
  devise_for :users

  get '/search/:query' => "posts#search", :as => "search_user"
  
  resources :search, only: [:index]

  resources :users do
    member do
      get :following, :followers
    end
  end

  resources :posts do
    resources :likes
  end

  resources :posts, :users, only: [:show]

  resources :friends, :likes
  resources :relationships, only: [:create, :destroy]
  resources :komments
  resources :avatars

  root 'posts#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end