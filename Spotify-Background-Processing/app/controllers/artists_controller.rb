class ArtistsController < ApplicationController
require 'worker.rb'
require 'json'

  def new
    @artist = Artist.last
     respond_to do |format|
      format.json {render :json => @artists}
    end 
  end

  def create
      @artists = Artist.all 
      HardWorker.perform_async
      redirect_to :back
  end 

end

