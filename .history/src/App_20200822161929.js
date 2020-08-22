import React, { useEffect } from 'react'
import TodoList from './Todo/TodoList/TodoList'
import Context from './context';
// import AddToDo from './Todo/AddTodo/AddTodo';
import Loader from './Loader/Loader';

const AddTodo = React.lazy(() => import('./Todo/AddTodo/AddTodo.js'))

function App() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(todos => {
        setTodos(todos);
        setLoading(false);
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
        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>

        {loading
          ? <Loader />
          : todos.length
            ? <TodoList todos={todos} onToggle={toggleTodo} />
            : <p>No todos</p>
        }

      </div>
    </Context.Provider>
  )
}

export default App
