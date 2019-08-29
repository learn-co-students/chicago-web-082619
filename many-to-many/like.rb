class Like
  @@all = []
  attr_accessor :tweet, :user
  def initialize(tweet, user)
    @tweet = tweet
    @user = user
    @@all << self
  end

  def self.all
    @@all
  end
end
