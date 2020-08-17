import React from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList(props) {
    return (
        <ul className="ul_base">
            {
                props.todos.map(todo => {
                    return <TodoItem key={todo.id} todo={todo} />
                })
            }
        </ul>
    )

}