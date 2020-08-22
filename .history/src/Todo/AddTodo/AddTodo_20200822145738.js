import React, { useState } from 'react';
import './AddTodo.css';

function AddToDo() {
    const [value, setValue] = useState('');

    function handlerSubmit($event) {
        $event.preventDefault();
    }

    return (
        <form className="add_todo" onSubmit={handlerSubmit}>
            <input value={value} onChange={(event) => setValue(event.target.value)} />
            <button type="submit">Add todo</button>
        </form>
    )
}

export default AddToDo;