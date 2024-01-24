import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import WelcomeMessage from "./components/WelcomeMessage"
import "./App.css"
import { useState } from "react";
function App() {

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added:${itemName} date:${itemDueDate}`);
    const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newTodoItems);
  }
  return <center className='todo-container'>
    <AppName />
    <AddTodo onNewItem={handleNewItem} />
    {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
    <TodoItems TodoItems={todoItems}></TodoItems>
  </center>
}

export default App
