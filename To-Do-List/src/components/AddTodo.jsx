import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi"

function AddTodo({ onNewItem }) {

    // const [todoName, setTodoName] = useState("");
    // const [dueDate, setDueDate] = useState("");
    const todoNameElement = useRef();
    const dueDateElement = useRef();

    // const handleNameChange = (event) => {
    //     setTodoName(event.target.value);
    //     noOfUpdates.current += 1;
    // }
    // const handleDateChange = (event) => {
    //     setDueDate(event.target.value);
    //     console.log(`No of updates:${noOfUpdates.current}`)
    // }
    const handleAddButtonClicked = (event) => {
        // console.log(event);
        event.preventDefault();
        const todoName = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;
        todoNameElement.current.value = "";
        dueDateElement.current.value = "";
        console.log(`${todoName} due on :${dueDate}`);
        onNewItem(todoName, dueDate);
        // setTodoName("");
        // setDueDate("");
    }
    return <div className="container items-container">
        <form className="row" onSubmit={handleAddButtonClicked}>
            <div className="col-6">
                <input type="text"
                    ref={todoNameElement}
                    placeholder="Enter Todo Here"
                // value={todoName}
                // onChange={handleNameChange}
                /></div>
            <div className="col-4">
                <input type="date"
                    ref={dueDateElement}
                // value={dueDate}
                // onChange={handleDateChange}
                /></div>
            <div className="col-2">
                <button className="btn btn-success st-button"
                // onClick={handleAddButtonClicked}
                ><BiMessageAdd /></button></div>
        </form>
    </div >
}

export default AddTodo;