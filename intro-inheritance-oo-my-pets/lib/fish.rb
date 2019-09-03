require_relative "./animal.rb"

class Fish < Animal

  def speak
    super
    puts "Blub blub!"
  end
end
