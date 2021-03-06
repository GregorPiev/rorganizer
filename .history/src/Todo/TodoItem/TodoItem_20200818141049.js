import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

function TodoItem({ todo, index }) {

    return (
        <li>
            <span>
                <input type='checkbox' />
                <strong>{index + 1}</strong>&nbsp;
                {todo.title}
            </span>
            <button className={rm}>&times;</button>

        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default TodoItem;