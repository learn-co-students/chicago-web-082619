class User
  attr_reader :username, :tweets

  def initialize(username)
    @username = username
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

  def like_tweet(tweet)
    Like.new(tweet, self)
  end

  def dislike_tweet(tweet)
    my_likes = Like.all.select { |like| like.user == self }
    found_like = my_likes.find { |like| like.tweet == tweet }
    Like.all.delete(found_like)
    # found_like.tweet = nil
    # found_like.user = nil
  end
end
