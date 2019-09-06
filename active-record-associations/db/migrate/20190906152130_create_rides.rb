class CreateRides < ActiveRecord::Migration[5.2]
  def change
    create_table :rides do |t|
      t.date :date
      t.integer :driver_id
      t.integer :passenger_id
      t.float :cost
      t.float :distance
      t.integer :driver_rating
      t.integer :passenger_rating
    end
  end
end
