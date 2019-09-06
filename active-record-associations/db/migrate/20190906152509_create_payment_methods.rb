class CreatePaymentMethods < ActiveRecord::Migration[5.2]
  def change
    create_table :payment_methods do |t|
      t.string :type
      t.integer :passenger_id
      t.string :acct_number
    end
  end
end
