class CreateVisits < ActiveRecord::Migration[5.2]
  def change
    create_table :visits do |t|
      t.string :reason
      t.integer :doctor_id

      t.timestamps
    end
  end
end
