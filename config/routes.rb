Rails.application.routes.draw do
  devise_for :users

  root 'posts#index'

  resources :users do
    member do
      get :following, :followers
    end
  end

  resources :posts do
    resources :likes
  end

  resources :posts

  resources :friends, :likes
  resources :relationships, only: [:create, :destroy]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end