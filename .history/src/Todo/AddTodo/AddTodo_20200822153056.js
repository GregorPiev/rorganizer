import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddTodo.css';

/* function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);

    return {
        bind: {
            value: value,
            onChange: event => setValue(event.target.value)
        },
        clear: setValue(''),
        value: () => value

    }
} */
function AddToDo({ onCreate }) {
    // const input = useInputValue('');

    function handlerSubmit($event) {
        $event.preventDefault();
        /* if (input.value().trim()) {
            onCreate(input.value());
            input.clear()
        } */

    }

    return (
        <form className="add_todo" onSubmit={handlerSubmit}>
            <input />
            <button type="submit">Add todo</button>
        </form>
    )
}

AddToDo.propTypes = {
    onCreate: PropTypes.func.isRequired
}
export default AddToDo;