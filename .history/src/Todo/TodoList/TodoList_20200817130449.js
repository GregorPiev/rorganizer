import React from 'react';
import PropType from 'prop-types';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';


function TodoList(props) {
    return (
        <ul className="ul_base">
            {
                props.todos.map((todo, index) => {
                    return <TodoItem key={todo.id} todo={todo} index={index} />
                })
            }
        </ul>
    )

}

export default TodoList;