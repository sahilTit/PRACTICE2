import { useState } from "react";

function AddTodo({ onNewItem }) {

    const [todoName, setTodoName] = useState();
    const [dueDate, setDueDate] = useState();

    const handleNameChange = (event) => {
        setTodoName(event.target.value);
    }
    const handleDateChange = (event) => {
        setDueDate(event.target.value);
    }
    const handleAddButtonClicked = () => {
        onNewItem(todoName, dueDate);
        setTodoName("");
        setDueDate("");
    }
    return <div className="container items-container">
        <div className="row">
            <div className="col-6">
                <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange} /></div>
            <div className="col-4">
                <input type="date" value={dueDate} onChange={handleDateChange} /></div>
            <div className="col-2">
                <button className="btn btn-success st-button"
                    onClick={handleAddButtonClicked}
                >Add</button></div>
        </div>
    </div >
}

export default AddTodo;