Goals:

Render a whole list, not just first todo
Figure out what to display when no todos are present
Implement a todo form for adding to the list

What we covered:

- Conditional display as a way to handle initial/"blank" app state
- Setting appropriate default values for collections, strings, etc.
- Refactoring a component (our TodosContainer) from receiving props to instantiating state in-place
- Passing state down to a child (items for TodosList) as props
- The "(Smart) Container Component" pattern, where we held a list AND a form
- Letting the container hold our state
- Creating/binding state changing functions (addTodo()) in the container component
- Passing state changing functions into a child (TodoForm) as a prop
- Writing change handlers to save form inputs as state
- Refactoring to create one dynamic change handler to work on all inputs
