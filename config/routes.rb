Rails.application.routes.draw do
  devise_for :users

  get '/updatelikes' => "posts#update_likes"

  resources :users do
    member do
      get :following, :followers
    end
  end

  resources :posts do
    resources :likes
    resources :komments
  end

  resources :posts, :users

  resources :friends, :likes
  resources :relationships, only: [:create, :destroy]

  root 'posts#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end