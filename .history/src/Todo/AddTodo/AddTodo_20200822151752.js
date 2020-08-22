import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddTodo.css';

function useInputValue() {
    const [value, setValue] = useState(defaultValue);

    return {
        value: value,
        onChange: event => event.target.value
    }
}
function AddToDo({ onCreate }) {
    const input = useInputValue('');

    function handlerSubmit($event) {
        $event.preventDefault();
        if (input.value.trim()) {
            onCreate(input.value);
            // setValue('');
        }

    }

    return (
        <form className="add_todo" onSubmit={handlerSubmit}>
            <input {...input} />
            <button type="submit">Add todo</button>
        </form>
    )
}

AddToDo.propTypes = {
    onCreate: PropTypes.func.isRequired
}
export default AddToDo;