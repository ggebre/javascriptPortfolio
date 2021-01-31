class AddGovernortoStates < ActiveRecord::Migration[6.0]
  def change
    add_column :states, :governor, :string 
  end
end
