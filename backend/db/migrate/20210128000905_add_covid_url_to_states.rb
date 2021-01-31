class AddCovidUrlToStates < ActiveRecord::Migration[6.0]
  def change
    add_column :states, :covid_url, :string 
  end
end
