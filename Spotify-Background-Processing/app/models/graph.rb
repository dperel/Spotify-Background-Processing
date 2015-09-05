class Graph < ActiveRecord::Base
  def make_graph
    binding.pry
    respond_to do |format|
      format.js { render :js => "updateChart();" }
  end
end
