/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'


function App() {

  // Create a list of todos store it in state
  const [ todos, setTodos ] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a todo app' },
    { id: 3, text: 'Learn more about React' }
  ])

  // Helper Functions
  // Create a function to add a todo to the list
  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text }])
  }

  // Create a function to delete a todo from the list
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }



  return (
    <div className="App">
    {/* Create a form to add a todo */}
    {/* Attach the addTodo Function to the form */}
      <form onSubmit={(e) => {
        e.preventDefault()
        addTodo(e.target[0].value)
        e.target[0].value = ''
      }}>
        <input type="text" />
        <button>Add</button>
      </form>
        {/* Display the list of todos */}
        <ul>
        {todos.map(todo => (
          <li key={todo.id}>
          {todo.text}
          {/* Attach the delete helper function to the button */}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

// My game plan for building a simple todo app
// 1. Create a form to add a todo
// 2. Create a list of todos store it in state
// 2.1. Display the list of todos
// 3. Create a function to add a todo to the list
// 4. Attach the function to the form
// 5. Create a button on each todo to delete it
// 6. Create a function to delete a todo from the list
// 7. Attach the function to the button
