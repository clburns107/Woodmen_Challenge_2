Rails.application.routes.draw do
  get "cities/list" => 'cities#list'
  get "countries/list" => 'countries#list'
end
