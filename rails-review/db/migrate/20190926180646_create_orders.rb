class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.date :date
      t.references :diner
      t.references :meal

      t.timestamps
    end
  end
end
