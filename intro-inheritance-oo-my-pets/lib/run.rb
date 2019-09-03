require 'pry'
require_relative "./cat.rb"
require_relative "./dog.rb"
require_relative "./fish.rb"
require_relative "./animal.rb"
require_relative "./owner.rb"
c = Cat.new("Admiral", 10)
d = Dog.new("Rupert")
f = Fish.new("Wanda")

o = Owner.new


binding.pry
true
