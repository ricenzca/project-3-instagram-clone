Rails.application.routes.draw do
  devise_for :users

  root 'posts#index'
    # get '/posts/show/:id' => 'posts#show' , as: 'post'
    # get '/posts/new' => 'posts#new', as: 'newPost'
    # post '/posts/new' => 'posts#storeNew'

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