class Driver < ActiveRecord::Base
  has_many :rides
  has_many :passengers, through: :rides

  # def rides
  #   Ride.all.where(driver_id: self.id)
  # end

  def total_distance_driven
    distances = rides.map{ |ride| ride.distance }
    distances.reduce(:+)
  end

  def calculate_avg_rating
    ratings = rides.map{ |ride| ride.driver_rating }
    self.avg_rating = ratings.reduce(:+) / ratings.count
    self.save
  end
end
