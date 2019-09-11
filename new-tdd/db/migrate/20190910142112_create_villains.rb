class CreateVillains < ActiveRecord::Migration[5.2]
  def change
    create_table :villains do |t|
      t.string :name
      t.string :ability
      t.integer :power_level
      t.integer :hero_id
    end
  end
end
