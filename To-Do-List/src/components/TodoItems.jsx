import TodoItem from "./TodoItem"
const TodoItems = ({ TodoItems,onDeleteClick }) => {
    return <div className="items-container">
        {TodoItems.map((item) =>
            <TodoItem key={item.name} todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick}></TodoItem>)}
    </div>
}
export default TodoItems;