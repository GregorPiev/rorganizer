import React, { useEffect, useReducer } from 'react';
import TodoList from './Todo/TodoList/TodoList';
import Context from './context';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import reducer from './reducer';

const AddTodo = React.lazy(() => import('./Todo/AddTodo/AddTodo.js'))

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const [loading, setLoading] = React.useState(true);

  async function initTodos() {
    const response = await (
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => response.json())
    );
    dispatch({
      type: 'init',
      payload: response
    })
  }

  useEffect(() => {
    initTodos();
  }, []);

  useEffect(() => {
    if (state.length) {
      setLoading(false);
    }
  }, [state, loading])



  function addTodo(title) {
    dispatch({
      type: 'add',
      payload: title
    })
  }

  return (
    <Context.Provider value={{
      dispatch
    }}>
      <div className="wrapper">
        <h1>React Tutorial</h1>
        <Modal />
        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>

        {loading
          ? <Loader />
          : state.length
            ? <TodoList todos={state} />
            : <p>No todos</p>
        }

      </div>
    </Context.Provider>
  )
}

export default App
