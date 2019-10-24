Rails.application.routes.draw do
  # namespace :api do
  #   scope :v1 do
  #     mount_devise_token_auth_for 'User', at: 'auth'
  #   end
  # end

  namespace :api do
    namespace :v1 do
      get 'tickets/index'
      post 'tickets/create'
      get '/show/:id', to: 'tickets#show'
      delete '/destroy/:id', to: 'tickets#destroy'

      get '/show/:id/solved', to: 'tickets#ticket_solved'
    end
  end
  root 'pages#home'
  get '/*path' => 'pages#home'
end
