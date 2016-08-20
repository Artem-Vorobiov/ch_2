Rails.application.routes.draw do
	resources :landings
	resources :contacts, only: [:new, :create]
	root 'contacts#new'
end
