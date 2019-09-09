# gem install rest-client
require 'rest-client'
require 'json'
require 'pry'


# response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=ruby+programming")
# book_data = JSON.parse(response)

def display_book_info(book)
  puts "*" * 30
  puts book["volumeInfo"]["title"]
  puts "by"
  book["volumeInfo"]["authors"].each do |author|
    puts author
  end
  puts book["volumeInfo"]["description"]
end

def get_user_search
  puts "Please input your search terms"
  search = gets.chomp
end

def make_request(search_term)
  response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{search_term}")
  JSON.parse(response)
end

def display_all_books(book_data)
  book_data["items"].collect do |book|
    display_book_info(book)
  end
end

def run
  search = get_user_search
  data = make_request(search)
  display_all_books(data)
end

run
# Take a search from the user using gets.chomp
# Make a request to the Google Books API using those search terms
# Display the title, authors, and description for each book
