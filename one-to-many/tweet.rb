class Tweet
  attr_reader :message, :user

  @@all = []
  def initialize(message, user)
    @message = message
    @user = user
    @@all << self
  end

  def self.all
    @@all
  end

  def username
    @user.username
  end

  def self.select_tweets_by_user(username)
    Tweet.all.select do |tweet|
      tweet.username == username
    end
  end

end
