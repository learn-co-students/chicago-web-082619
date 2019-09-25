class Snail < ApplicationRecord
  validates(:name, {presence: true, uniqueness: true})
  validates(:breed, {presence: true})
  validates(:shell_size, {presence: true, numericality: true})
  validate :validate_shell_size

  def validate_shell_size
    if self.shell_size < 1 || self.shell_size > 20
      # self.shell_size.round
      self.errors.add(:shell_size, "must be less than 20 and greater than 0")
    end
  end
end
