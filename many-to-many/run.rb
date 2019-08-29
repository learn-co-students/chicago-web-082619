require_relative './tweet.rb'
require_relative './user.rb'
require_relative "./like.rb"
require 'pry'
user = User.new("noa")
tweet1 = Tweet.new("hello world", user)
tweet2 = Tweet.new("twitter is scary", user)
user2 = User.new("dril")
binding.pry

true
