import React, { Component } from 'react'

function TodoListItem(props) {
  // Create a "convenience const" so I don't have to keep saying props.todo
  const todo = props.todo

  // Create an array of icons to render in the "Difficulty" <p> tag below
  let difficultyIcons = []
  for (var i = 0; i < todo.difficulty; i++) {
    difficultyIcons.push(<i className="paw icon"></i>)
  }

  return (
    <li>
      <h3>{todo.task}</h3>
      <p>Urgency: {todo.urgency}</p>
      <p>Difficulty: {difficultyIcons}</p>
      <br/>
    </li>
  )
}

export default TodoListItem
