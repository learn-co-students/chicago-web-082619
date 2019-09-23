class Airport < ApplicationRecord

  def fly
    take_off
  end

  private

  def take_off
    p "ZOOOM"
  end
end
