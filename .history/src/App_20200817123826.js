import React from 'react';
import TodoList from './Todo/TodoList/TodoList';

function App() {
  const todos = [
    { id: 1, completed: false, title: 'Buy bread' },
    { id: 1, completed: false, title: 'Buy bread' },
    { id: 1, completed: false, title: 'Buy bread' },
    { id: 1, completed: false, title: 'Buy bread' },

  ];




  return (
    <div className="wrapper">
      <h1>React Tutorial</h1>
      <TodoList />
    </div>
  );
}

export default App;
