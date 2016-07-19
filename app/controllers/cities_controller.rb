class CitiesController < ApplicationController

  def list
    @cities = City.all
    render "index"
  end
end