class CreateDiners < ActiveRecord::Migration[5.2]
  def change
    create_table :diners do |t|
      t.string :name

      t.timestamps
    end
  end
end
