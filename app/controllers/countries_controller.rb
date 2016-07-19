class CountriesController < ApplicationController

  def list
    @countries = Country.all
    render "index"
  end
end