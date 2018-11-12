# frozen_string_literal: true

Rails.application.routes.draw do
  resources :folders
  resources :bookmarks
  constraints format: :json do
    scope "api" do
      use_doorkeeper do
        skip_controllers :applications, :authorized_applications, :authorizations
      end

      resource :users, only: [:create, :show, :update] do
        resources :tweets, only: [:index, ]
        resources :posts, only: [:create, :show, :index]
        resources :folders, only: [:create, :show, :index, :update, :destroy] do
          resources :bookmarks, only: [:create, :show, :update, :destroy]
        end
      end
    post '/auth/twitter', :to => 'tweets#login'
    post '/auth/twitter/reverse', :to => 'tweets#token'
    end
  end
end
