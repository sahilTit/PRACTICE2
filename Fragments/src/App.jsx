// import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {

  let foodItems = ["Rum", "Gin", "Beer", "Wiskey", "Vodka"];
  return (<>
    <Container>
      <h1 className="Food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodInput></FoodInput>
      <FoodItems items={foodItems} />
    </Container>
    {/* <Container>
      <p>Above is the list of list that are really helpful for listing.</p>
    </Container> */}
  </>)
}

export default App
