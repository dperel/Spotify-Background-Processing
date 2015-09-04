class ArtistsController < ApplicationController
require 'worker.rb'
require 'json'

  def new
    @artists = Artist.all 
     respond_to do |format|
      format.json {render :json => @artists}
    end 
  end

  def create
      @artists = Artist.all 
      HardWorker.perform_async

      redirect_to :back
  end 

  # def refresh 
  #   @artists = Artist.all
  #   respond_to do |format|
  #     format.json {render :json => @artists}
  #   end 
  # end


end

