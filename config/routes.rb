Rails.application.routes.draw do
  root 'pages#index'


  namespace :api do
    namespace :v1 do
      resources :lists, param: :id
      resources :tasks
    end
  end
  match '*path', to: 'pages#index', via: :all
end
