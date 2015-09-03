class ArtistsController < ApplicationController
require 'worker.rb'

  def index
    @artists = Artist.all 
  end

  def create
      @artists = Artist.all 
      HardWorker.perform_async
      redirect_to :back
  end 

end

