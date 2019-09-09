require_relative '../config/environment'

def welcome_message
  puts "Hello! Welcome to card dealer!"
  puts "You just earend (1) point!"
  main_menu
end

def main_menu
  puts "Here are your choices:"
  puts "You can 1. deal a new deck"
  puts "2. look at your decks"
  puts "3. quit"
  answer = gets.chomp
  if answer == "1"
    puts "Making a new deck"
  elsif answer == "2"
    puts "Here are your decks"
  elsif answer == "3"
    puts "Bye!"
    return nil
  else
    puts "Invalid response"
    main_menu
  end
end

welcome_message
# your code to run the application
