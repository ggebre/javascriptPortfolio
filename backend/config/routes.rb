Rails.application.routes.draw do

  
  get 'comments/getLast'
  resources :ranks
  resources :comments
  resources :senators
  resources :answers
  resources :states
  resources :question_categories
  resources :categories
  resources :questions
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
