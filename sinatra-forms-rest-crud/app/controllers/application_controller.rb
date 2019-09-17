class ApplicationController < Sinatra::Base
  # Sinatra controllers have various settings that we can tweak in this block
  configure do
    set :views, 'app/views'
    set :method_override, true
  end

  # WHAT I WANT TO DO: Visit a list of books
  # REST ACTION VOCAB WORD: INDEX
  get '/books/?' do
    @name = params[:name]
    @books = Book.all
    erb :'books/index'
  end

  # WHAT I WANT TO DO: Visit a form to create a new book
  # REST ACTION VOCAB WORD: NEW
  get '/books/new/?' do
    erb :'books/new'
  end

  # WHAT I WANT TO DO: Add a newly created book to the database
  # REST ACTION VOCAB WORD: CREATE
  post '/books/' do
    # p params[:title]
    # p params[:author]
    # p params[:snippet]
    book = Book.new(title: params[:title], author: params[:author], snippet: params[:snippet])
    book.save
    redirect "/books/#{book.id}"
  end

  # WHAT I WANT TO DO: Visit the details of one particular book
  # REST ACTION VOCAB WORD: SHOW
  get '/books/:id/?' do
    @book = find_book
    erb :'books/show'
  end

  # WHAT I WANT TO DO: Visit a form to edit an existing book
  # REST ACTION VOCAB WORD: EDIT
  get '/books/:id/edit' do
    @book = find_book
    erb :'books/edit'
  end

  # WHAT I WANT TO DO: Change an existing book in the database
  # REST ACTION VOCAB WORD: UPDATE
  patch '/books/:id' do
    book = find_book
    book.assign_attributes(title: params[:title], author: params[:author], snippet: params[:snippet])
    book.save
    redirect "/books/#{book.id}"
  end

  # WHAT I WANT TO DO: Delete an existing book in the database
  # REST ACTION VOCAB WORD: DESTROY
  delete '/books/:id' do
    book = find_book
    book.destroy
    redirect '/books'
  end

  def find_book
    Book.find_by(id: params[:id])
  end




















end
