class HardWorker

require 'open-uri'
require 'json'

include Sidekiq::Worker
sidekiq_options :queue => :default

  def perform
    count= 2
    url = "https://api.spotify.com/v1/search?q=year%3A2001&type=artist&market=US&limit=1&offset="
    1..5.times do 
      finalURL = url + count.to_s
      count+=1
      data = JSON.parse(open(finalURL).read)
      if data
        return_data = data["artists"]["items"][0]
        obj = Artist.new
        obj.name = return_data["name"]
        obj.followers = return_data["followers"]["total"]
        obj.save
      else 
        # gon.message = "sorry! API malfunction!"
      end 
    end 
  end 

  def dothis
  
    binding.pry
  end


end