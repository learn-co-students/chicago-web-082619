class CreateClouds < ActiveRecord::Migration
  def change
    create_table :clouds do |t|
      t.string :type
      t.integer :size
      t.timestamps null: false
    end
  end
end
