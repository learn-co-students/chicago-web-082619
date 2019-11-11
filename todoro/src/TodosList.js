import React, { Component } from 'react'
import TodoListItem from './TodoListItem'

class TodosList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // Need more than just one...testing with the single item for now!

    const allTodos = this.props.listedTodos.map(todoItem => {
      return <TodoListItem todo={todoItem} key={todoItem.id} />
    })
    return (
      <ul>
        {allTodos}
      </ul>
    )
  }
}

export default TodosList
