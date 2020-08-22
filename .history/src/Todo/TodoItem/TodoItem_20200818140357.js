import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem';

function TodoItem({ todo, index }) {

    return (
        <li>
            <span>
                <input type='checkbox' />
                <strong>{index + 1}</strong>
                {todo.title}
            </span>
            <button>&times;</button>

        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default TodoItem;