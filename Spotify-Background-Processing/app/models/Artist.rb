class Artist < ActiveRecord::Base
require 'worker.rb'

  def initialize
    HardWorker.perform_async
  end



end
