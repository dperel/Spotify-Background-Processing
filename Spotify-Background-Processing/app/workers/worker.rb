class HardWorker

require 'open-uri'
require 'json'

include Sidekiq::Worker

  def perform
    1..3.times do 
      counter = 1
      url = "https://api.spotify.com/v1/search?q=year%3A2001&type=artist&market=US&limit=1&offset=" + counter.to_s
      data = JSON.parse(open(url).read)
      return_data = data["artists"]["items"][0]
      Artist.new(return_data).save
      count+=1 
    end 
  end 

end