import React, { useEffect } from 'react'
import TodoList from './Todo/TodoList/TodoList'
import Context from './context';
import AddToDo from './Todo/AddTodo/AddTodo';
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Buy bread' },
    { id: 2, completed: true, title: 'Buy car' },
    { id: 3, completed: false, title: 'Buy home' },
    { id: 4, completed: false, title: 'Buy woman' },
    { id: 5, completed: false, title: 'Buy milk' },
    { id: 6, completed: false, title: 'Buy butter' },
  ])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?limit=10')
      .then(response => response.json())
      .then(todos => {
        setTodos(todos)
      })
  }, [])
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

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title: title,
          completed: false,
          id: Date.now()
        }
      ])
    )
  }

  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>
      <div className="wrapper">
        <h1>React Tutorial</h1>
        <AddToDo onCreate={addTodo} />
        {
          todos.length
            ? <TodoList todos={todos} onToggle={toggleTodo} />
            : <p>No todos</p>
        }

      </div>
    </Context.Provider>
  )
}

export default App
