import React, { useEffect, useReducer } from 'react';
import TodoList from './Todo/TodoList/TodoList';
import Context from './context';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import reducer from './reducer';

const AddTodo = React.lazy(() => import('./Todo/AddTodo/AddTodo.js'))

function App() {
  const [state, dispatch] = useReducer(reducer,
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(todos => {
        setLoading(false);
      }));
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    console.log('state:', state);
    console.log('loading:', loading);
  }, [state, loading])

  /* function toggleTodo(id) {
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
  } */

  function addTodo(title) {
    dispatch({
      type: 'add',
      payload: title
    })
  }

  return (
    <Context.Provider value={{
      /* removeTodo,
      toggleTodo */
    }}>
      <div className="wrapper">
        <h1>React Tutorial</h1>
        <Modal />
        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>

        {loading
          ? <Loader />
          : state.todos.length
            ? <TodoList todos={state.todos} />
            : <p>No todos</p>
        }

      </div>
    </Context.Provider>
  )
}

export default App
