class BooksController < ApplicationController

  get "/books" do
    @books = Book.all
    erb :"books/index"
  end

  get "/books/new" do
    @authors = Author.all
    erb :"books/new"
  end

  get "/books/:id" do
    @book = Book.find(params["id"])
    @author = @book.author
    erb :"books/show"
  end

  post "/books" do
    @book = Book.new params
    if @book.title.length < 5
      @authors = Author.all
      return erb :"books/new"
    end
    @book.save
    redirect "/books/#{@book.id}"
  end

end
