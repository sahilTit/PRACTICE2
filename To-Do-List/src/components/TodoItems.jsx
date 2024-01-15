import TodoItem from "./TodoItem"
const TodoItems = ({ TodoItems }) => {
    return <div className="items-container">
        {TodoItems.map((item) =>
            <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>)}
    </div>
}
export default TodoItems;