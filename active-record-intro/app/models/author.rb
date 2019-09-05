class Author < ActiveRecord::Base

  def books
    # Book.all.select{ |book| book.author_id == self.id }
    Book.where(author_id: self.id)
  end
end
