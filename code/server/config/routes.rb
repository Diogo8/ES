# frozen_string_literal: true

Rails.application.routes.draw do
  constraints format: :json do
    scope "api" do
      use_doorkeeper do
        skip_controllers :applications, :authorized_applications, :authorizations
      end

      resources :users, only: [:create, :show, :index] do
        resources :posts, only: [:create, :show, :index]
      end
      put "users", to: "users#update"
    end
  end
end
