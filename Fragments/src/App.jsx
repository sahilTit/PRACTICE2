// import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";

function App() {

  let foodItems = ["Sahil", "A second item", "A third item", "A fourth item", "And a fifth one"];
  return (<Container>
    <h1 className="Food-heading">Healthy Food</h1>
    <ErrorMessage items={foodItems} />
    <FoodItems items={foodItems} />
  </Container>)
}

export default App
