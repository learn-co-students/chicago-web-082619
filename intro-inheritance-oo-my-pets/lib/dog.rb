require_relative "./animal.rb"

class Dog < Animal
  def speak
    super
    puts "Bow wow!"
  end
end
