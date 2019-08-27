require 'pry'
class BankAccount
  # attr_reader :balance
  # attr_writer :balance
  attr_accessor :balance
  attr_reader :user_id

  @@all = []

  def initialize(balance, user_id)
    @balance = balance
    @user_id = user_id
    @@all << self
  end

  def deposit(amount)
    p self
    self.balance = self.balance + amount
  end

  def payday
    self.deposit(100000000000)
    puts "KACHING!"
  end

  def self.all
    p self
    @@all
  end
  # def balance
  #   @balance
  # end
  #
  # def balance=(amount)
  #   @balance = amount
  # end
end

ba = BankAccount.new(1000, 1)
binding.pry
