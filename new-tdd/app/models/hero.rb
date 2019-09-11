class Hero < ActiveRecord::Base
  self.table_name = "heroes"
  has_many :villains

  def train(hours)
    self.power_level += hours*2
  end

  def self.find_strongest
    ranked_heroes.first
  end

  def self.ranked_heroes
    ranked_heroes = self.order(power_level: :desc)
  end

  def say_name
    "My name is #{self.name}!"
  end


end
