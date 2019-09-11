class Villain < ActiveRecord::Base
  belongs_to :hero

  def power_drain
    self.hero.power_level -= 5
    self.power_level += 5
  end
end
