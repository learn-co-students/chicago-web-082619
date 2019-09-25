class Visit < ApplicationRecord
  belongs_to :doctor
  validates :reason, presence: true
end
