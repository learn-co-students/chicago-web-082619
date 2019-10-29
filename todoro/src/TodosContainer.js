import React, { Component } from 'react'
import TodosList from './TodosList'
import TodoForm from './TodoForm'
import todos from './todos'

class TodosContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listedTodos: todos
    }
  }

  addTodo = (newTodo) => {
    // const newTodo = {task: todoInfo.task, urgency: todoInfo.urgency, difficulty: todoInfo.difficuly}
    this.setState({ listedTodos: [...this.state.listedTodos, newTodo]})
  }

  render() {
    return (
      // This h1 shouldn't show up... UNLESS the list is empty. What to do?
      <div className="TodosContainer">
        { this.state.listedTodos[0]
          ?
          <TodosList listedTodos={this.state.listedTodos} />
          :
          <h1>Yayyy! "Bus stop zero!" All your todos are todone!</h1>
        }
        <TodoForm addTodo={this.addTodo} />
      </div>
    )
  }
}

export default TodosContainer
