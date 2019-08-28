class User
  attr_reader :username, :tweets
  def initialize(username)
    @username = username
  end

  def post_tweet(message)
    tweet = Tweet.new(message, self)
  end

  def tweets
    Tweet.select_tweets_by_user(@username)
  end
end
