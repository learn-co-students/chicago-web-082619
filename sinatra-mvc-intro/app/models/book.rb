class Book < ActiveRecord::Base
  def louder_title
    title.upcase
  end
end
