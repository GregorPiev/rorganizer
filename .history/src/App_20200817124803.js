import React from 'react';
import TodoList from './Todo/TodoList/TodoList';

function App() {
  const todos = [
    { id: 1, completed: false, title: 'Buy bread' },
    { id: 2, completed: false, title: 'Buy car' },
    { id: 3, completed: false, title: 'Buy home' },
    { id: 4, completed: false, title: 'Buy woman' },
    { id: 5, completed: false, title: 'Buy milk' }
  ];
  return (
    <div className='wrapper'>
      <h1>React Tutorial</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
