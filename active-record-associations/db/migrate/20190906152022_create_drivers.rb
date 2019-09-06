class CreateDrivers < ActiveRecord::Migration[5.2]
  def change
    create_table :drivers do |t|
      t.string :name
      t.float :avg_rating
      t.integer :years
    end
  end
end
