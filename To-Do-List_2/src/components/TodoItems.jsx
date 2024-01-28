import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem"
const TodoItems = () => {
    const contextObj = useContext(TodoItemsContext);
    const TodoItems = contextObj.todoItems;
    const deletItem = contextObj.deletItem;

    return (<div className="items-container">
        {TodoItems.map((item) =>
            <TodoItem
                key={item.name}
                todoName={item.name}
                todoDate={item.dueDate}
                onDeleteClick={deletItem}
            ></TodoItem>)}
    </div>)
}
export default TodoItems;