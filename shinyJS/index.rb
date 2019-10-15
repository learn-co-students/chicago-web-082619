class User
  attr_accessor :first_name, :last_name

  def initialize(last_name)
    @first_name = 'raza'
    @last_name = last_name
  end


  def say_hello
   puts 'hello' + @first_name
  end
end


user1 = User.new('jafri')
p user1.first_name # 
p user1.last_name#
user1.say_hello


user2 = User.new('douglas')
p user2.first_name # 
p user2.last_name# 


