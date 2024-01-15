import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
// import TodoItem1 from "./components/TodoItem1"
// import TodoItem2 from "./components/TodoItem2"
// import TodoItem from "./components/TodoItem"
import TodoItems from "./components/TodoItems"
import "./App.css"
function App() {
  const todoItems = [{
    name: "Buy Milk",
    dueDate: "31/12/2023"
  }, {
    name: "Buy Coffee",
    dueDate: "31/12/2023",
  },{
    name: "Buy Tea",
    dueDate: "31/12/2023",
  }
  ]
  return <center className='todo-container'>
    <AppName />
    <AddTodo />
    <TodoItems TodoItems={todoItems}></TodoItems>
  </center>
}

export default App
