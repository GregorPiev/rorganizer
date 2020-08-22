import React from 'react'
import TodoList from './Todo/TodoList/TodoList'

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Buy bread' },
    { id: 2, completed: true, title: 'Buy car' },
    { id: 3, completed: false, title: 'Buy home' },
    { id: 4, completed: false, title: 'Buy woman' },
    { id: 5, completed: false, title: 'Buy milk' },
    { id: 6, completed: false, title: 'Buy butter' },
  ])

  function toggleTodo(id) {
    console.log('%cid:' + id, 'color: red;')
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }),
    )
  }
  return (
    <div className="wrapper">
      <h1>React Tutorial</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  )
}

export default App
