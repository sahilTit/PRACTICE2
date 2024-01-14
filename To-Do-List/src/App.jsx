import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
// import TodoItem1 from "./components/TodoItem1"
// import TodoItem2 from "./components/TodoItem2"
import TodoItem from "./components/TodoItem"
import "./App.css"
function App() {
  return <center className='todo-container'>
    <AppName />
    <AddTodo />
    <div className="items-container">
      <TodoItem todoName="Buy Milk" todoDate="13/01/2024"></TodoItem>
      <TodoItem todoName="Buy Coffee" todoDate="31/12/2023"></TodoItem>

    </div>
  </center>
}

export default App
