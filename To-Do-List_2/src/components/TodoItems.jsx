import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem"
const TodoItems = () => {
    const contextObj = useContext(TodoItemsContext);
    const TodoItems = contextObj.todoItems;
    const deleteItem = contextObj.deleteItem;

    return (<div className="items-container">
        {TodoItems.map((item) =>
            <TodoItem
                key={item.name}
                todoName={item.name}
                todoDate={item.dueDate}
                onDeleteClick={deleteItem}
            ></TodoItem>)}
    </div>)
}
export default TodoItems;