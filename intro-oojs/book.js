class Book {
  constructor(bookData) {
    this.title = bookData.title
    this.author = bookData.author
    this.image = bookData.image
    this.element = document.createElement('div')
    console.log("Book created!")
  }

  render() {
    this.element.innerHTML = ''
    this.element.className = 'card'

    const img = document.createElement('img')
    img.src = this.image

    const h3 = document.createElement('h3')
    h3.textContent = this.title

    const p = document.createElement('p')
    p.textContent = this.author

    //add all sub-elements to this.element
    this.element.appendChild(img)
    this.element.appendChild(h3)
    this.element.appendChild(p)

    return this.element
  }

}







// https://vialogue.files.wordpress.com/2014/06/daring-greatly.png
