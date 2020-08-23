import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';
import Context from '../../context';

function TodoItem({ todo, index }) {
    const { dispatch } = React.useContext(Context);
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
                    onChange={() => dispatch({
                        type: 'toggle',
                        id: todo.id
                    })}
                />
                <strong>{index + 1}.</strong>&nbsp;
                {todo.title}
            </span>
            <button className="rb" onClick={
                () => {
                    dispatch({
                        type: 'remove',
                        id: todo.id
                    })
                }>&times;</button>

        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default TodoItem;