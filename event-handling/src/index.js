const ulElement  = document.querySelector('#tasks')

document.addEventListener('DOMContentLoaded', () => {
  addFormListener()
  addDeleteListener()
 })

function addDeleteListener(){
  ulElement.addEventListener('click', (event) => {
    if (event.target.className === 'deleteBtn') {
      event.target.parentNode.remove()
    }
  })
}


function addFormListener(){
  const formElement = document.querySelector('#create-task-form')
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTodo = event.target[0].value
    event.target[0].value = ''
    const todo = new Todo(newTodo)
  })
}

class User 
  def initialize(name)
    self.name = name
  end


  def say_hello
    puts "hello, " + self.name
  end


end



user1 = User.new('raza')









class Todo {
  constructor(newTodo){
    this.newTodo = newTodo
    const liElement = this.createLiElement(newTodo)
    const btnElement = this.createDeleteButton()

    liElement.append(btnElement)
    ulElement.append(liElement)
  }

  createLiElement(newTodo){
    const liElement = document.createElement('li')
    liElement.innerText = newTodo
    return liElement
  }

  createDeleteButton(){
    const btnElement = document.createElement('button')
    btnElement.innerText = 'delete'
    btnElement.className = 'deleteBtn'
    return btnElement;
  }
}























