class AddNameFollowersToAddresses < ActiveRecord::Migration
  def change
    add_column :artists, :name, :string
    add_column :artists, :followers, :integer
  end
end
