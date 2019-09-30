class CreateSnails < ActiveRecord::Migration[5.2]
  def change
    create_table :snails do |t|
      t.string :name
      t.string :breed
      t.integer :shell_size

      t.timestamps
    end
  end
end
