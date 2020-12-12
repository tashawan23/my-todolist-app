Rails.application.routes.draw do
  root 'pages#index'
  get '*path', to: 'pages#index', via: :all

  namespace :api do
    namespace :v1 do
      resources :lists, param: :slug
      resources :tasks
    end
  end
end
