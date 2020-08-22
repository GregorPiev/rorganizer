import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddTodo.css';

function AddToDo({ onCreate }) {
    const [value, setValue] = useState('');

    function handlerSubmit($event) {
        $event.preventDefault();
        if (value.trim()) {
            onCreate(value);
        }

    }

    return (
        <form className="add_todo" onSubmit={handlerSubmit}>
            <input value={value} onChange={(event) => setValue(event.target.value)} />
            <button type="submit">Add todo</button>
        </form>
    )
}

AddToDo.propTypes = {
    onCreate: PropTypes.func.isRequired
}
export default AddToDo;