import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

function TodoItem({ todo, index, onChange }) {

    return (
        <li>
            <span>
                <input type='checkbox' onChange={() => onChange(todo.id)} />
                <strong>{index + 1}.</strong>&nbsp;
                {todo.title}
            </span>
            <button className="rb">&times;</button>

        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TodoItem;