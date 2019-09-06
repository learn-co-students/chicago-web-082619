class PaymentMethod < ActiveRecord::Base
  belongs_to :passenger

  # def passenger=(passenger)
  #   self.passenger_id = passenger.id
  # end
end
