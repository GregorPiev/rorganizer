import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';
import Context from '../../context';

function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = React.useContext(Context);
    const classes = [];
    if (todo.completed === true) {
        classes.push('done');
    }
    return (
        <li>
            <span className={classes.join(' ')}>
                <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)}
                />
                <strong>{index + 1}.</strong>&nbsp;
                {todo.title}
            </span>
            <button className="rb" onClick={() => removeTodo(todo.id)}>&times;</button>

        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TodoItem;