class Artist < ActiveRecord::Base
@@data = []
  
  def initialize(return_data)
    @name = return_data["name"]
    @followers = return_data["followers"]["total"]
  end

end
