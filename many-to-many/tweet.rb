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
    user.username
  end

  def liking_users
    my_likes = Like.all.select { |like| like.tweet == self }
    my_likes.map { |like| like.user }
  end
end
