import { useContext } from "react";
import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi"
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
    const { addNewItem } = useContext(TodoItemsContext);
    const todoNameElement = useRef();
    const dueDateElement = useRef();

    const handleAddButtonClicked = (event) => {
        event.preventDefault();
        const todoName = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;
        todoNameElement.current.value = "";
        dueDateElement.current.value = "";
        addNewItem(todoName, dueDate);
    }
    return <div className="container items-container">
        <form className="row" onSubmit={handleAddButtonClicked}>
            <div className="col-6">
                <input type="text"
                    ref={todoNameElement}
                    placeholder="Enter Todo Here"
                /></div>
            <div className="col-4">
                <input type="date"
                    ref={dueDateElement}
                /></div>
            <div className="col-2">
                <button className="btn btn-success st-button"
                ><BiMessageAdd /></button></div>
        </form>
    </div >
}

export default AddTodo;