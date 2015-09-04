class ArtistsController < ApplicationController
require 'worker.rb'
require 'json'

  def index
    @artists = Artist.all 
  end

  def create
      @artists = Artist.all 
      HardWorker.perform_async
      # gon.artists = Artist.all.to_json 
      redirect_to :back
  end 


end

