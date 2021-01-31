class CreateRanks < ActiveRecord::Migration[6.0]
  def change
    create_table :ranks do |t|
      t.string :likes
      t.string :dislikes 

      t.timestamps
    end
  end
end
