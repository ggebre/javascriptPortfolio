class CreateSenators < ActiveRecord::Migration[6.0]
  def change
    create_table :senators do |t|
      t.string :name
      t.string :party
      t.references :state, null: false, foreign_key: true

      t.timestamps
    end
  end
end
