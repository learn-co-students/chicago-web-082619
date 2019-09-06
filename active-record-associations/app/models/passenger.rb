class Passenger < ActiveRecord::Base
  has_many :rides
  has_many :payment_methods
  has_many :drivers, through: :rides

  def call_ride(driver_id, distance, driver_rating, passenger_rating)
    cost = distance * 1.2
    date = Date.today
    Ride.create(date: date, driver_id: driver_id, passenger_id: self.id,
      cost: cost, distance: distance, driver_rating: driver_rating,
      passenger_rating: passenger_rating
    )
  end
end
