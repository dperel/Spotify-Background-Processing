class GraphWorker 


include Sidekiq::Worker
sidekiq_options :queue => :default

  def perform 
    
  end 

end 
