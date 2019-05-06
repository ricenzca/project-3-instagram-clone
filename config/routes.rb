Rails.application.routes.draw do
  devise_for :users

  root 'posts#index'
    get '/posts/:id' => 'posts#show' , as: 'post'
    get '/posts/new' => 'posts#new', as: 'new_post'
    post '/posts' => 'posts#storeNew'





  resources :users do
    member do
      get :following, :followers
    end
  end

  resources :posts, :friends, :likes
  resources :relationships,       only: [:create, :destroy]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end