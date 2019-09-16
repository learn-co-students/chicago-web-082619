class ApplicationController < Sinatra::Base
  # Sinatra controllers have various settings that we can tweak in this block
  configure do
    set :views, 'app/views'
  end

  # Whenever a GET request is made to localhost:9393/greeting/...
  get '/greeting/?' do
    # p params
    @name = params[:name]
    # ...respond to the requesting browser with the following string
    erb :greeting
  end

  get '/test-erb-render' do
    erb :test
  end

  get '/' do
    'Hola Mundo'
  end

  get '/books/?' do
    @name = params[:name]
    @books = Book.all
    erb :index
  end

  get '/books/new/?' do
    'AT THE FORM, (TO BE CONTINUED)'
  end

  get '/books/:id/?' do
    p params
    @book = Book.find_by(id: params[:id])
    erb :show
  end






















end
