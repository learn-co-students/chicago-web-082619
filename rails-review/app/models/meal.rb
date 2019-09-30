class Meal < ApplicationRecord
  has_many :orders
  has_many :diners, through: :orders

  validates :name, presence: true, uniqueness: true
  validates :category, presence: true
end
