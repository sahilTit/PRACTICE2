import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import "./App.css"
import { useState } from "react";
function App() {
  const initialTodoItems = [{
    name: "Buy Milk",
    dueDate: "31/12/2023"
  }, {
    name: "Buy Coffee",
    dueDate: "31/12/2023",
  }, {
    name: "Buy Tea",
    dueDate: "31/12/2023",
  }
  ];
  const [todoItems, setTodoItems] = useState(initialTodoItems)

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added:${itemName} date:${itemDueDate}`)
  }
  return <center className='todo-container'>
    <AppName />
    <AddTodo onNewItem={handleNewItem}/>
    <TodoItems TodoItems={todoItems}></TodoItems>
  </center>
}

export default App
