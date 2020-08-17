import React from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList() {
    return (
        <ul className="ul_base">
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </ul>
    )

}