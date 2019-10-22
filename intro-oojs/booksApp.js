const hardcodedBooks = [
  {
    title: "Sideways Stories from Wayside School",
    author: "Louis Sachar",
    image: "https://images-na.ssl-images-amazon.com/images/I/61028FUH0BL._SX323_BO1,204,203,200_.jpg"
  },
  {
    title: "The Great British Bake Off Everyday",
    author: "Linda Collister",
    image: "https://images-na.ssl-images-amazon.com/images/I/91hC2I4elsL.jpg"
  },
]

document.addEventListener('DOMContentLoaded', () => {
  const book_list = document.querySelector('#book-list')
  const new_book_form = document.querySelector('#new-book-form')

  hardcodedBooks.map(attributes =>{
    let book = new Book(attributes)
    book_list.appendChild(book.render())
  })

  new_book_form.addEventListener('submit', e => {
    e.preventDefault()
    let book = new Book({
      title: e.target.title.value,
      author: e.target.author.value,
      image: e.target.image.value,
    })
    // Call book's render method, return the element, append it to the list
    book_list.append(book.render())
    new_book_form.reset()
  })
})
