class Book < ActiveRecord::Base
  def author
    # Author.all.find{ |author| author.id == self.author_id }
    Author.find(self.author_id)
  end
end
