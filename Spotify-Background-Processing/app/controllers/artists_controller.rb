class ArtistsController < ApplicationController
require 'worker.rb'
require 'json'

  def new
    
    @artists = Artist.all.order("id desc").limit(5)
    respond_to do |format|
    format.json {render :json => @artists}

    end
  end

  def create
      HardWorker.perform_async
      redirect_to(:back)
  end 

end

