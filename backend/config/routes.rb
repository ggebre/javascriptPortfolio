Rails.application.routes.draw do

  
  get 'comments/getLast'
  resources :ranks, only: [:show, :update]
  resources :comments, except: [:show, :new]
  # resources :senators
  # resources :answers
  resources :states, only: :index
  # resources :question_categories
  # resources :categories
  resources :questions, only: [:index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
