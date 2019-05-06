Rails.application.routes.draw do
  devise_for :users

  root 'posts#index'
    post '/posts' => 'posts#store'
    # get '/posts/new' => 'posts#new', as: 'new_post'
  resources :users do
    member do
      get :following, :followers
    end
  end

  resources :posts, :friends, :likes
  resources :relationships,       only: [:create, :destroy]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end