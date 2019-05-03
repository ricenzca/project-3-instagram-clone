Rails.application.routes.draw do
  devise_for :users

  root 'users#index'

    get '/posts/new' => 'posts#new', as: 'new_post'

  resources :users, :posts, :friends, :likes

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end