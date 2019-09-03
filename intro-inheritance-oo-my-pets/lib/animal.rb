class Animal
  attr_reader :name
  attr_accessor :mood
  def initialize(name, *args)

    @name = name
    @mood = "nervous"
  end

  def speak
    puts "My name is #{@name}! Nice to meet you!"
  end

end
