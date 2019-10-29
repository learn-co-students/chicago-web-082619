import React, { Component } from 'react'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    // console.log(props.handleClick)
    this.state = {
      task: "",
      urgency: "",
      difficulty: 1
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    const newTodo = {difficulty: parseInt(this.state.difficulty), task: this.state.task, urgency: this.state.urgency}
    this.props.addTodo(newTodo)
  }

  handleInputChange = (e) => {
    const name = e.target.name
    this.setState({[name]: e.target.value})
    // console.log(this.state)
  }

  // handleUrgencyChange = (e) => {
  //   this.setState({urgency: e.target.value})
  //   console.log(this.state)
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="task" placeholder="Task" onChange={this.handleInputChange} />
        <input type="text" name="urgency" placeholder="Urgency" onChange={this.handleInputChange} />
        <input type="number" name="difficulty" placeholder="Difficulty" onChange={this.handleInputChange} />
        <input type="submit" value="TODORO!" />
      </form>
    )
  }
}

export default TodoForm
