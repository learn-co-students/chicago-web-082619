require_relative "./animal.rb"

class Cat < Animal
  def initialize(name, num_lives)
    @num_lives = num_lives
    super
  end
end
