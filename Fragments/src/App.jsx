// import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {

  // let foodItems = ["Wiskey", "Vodka"];

  // let textStateArr = useState("Drinks Entered By User");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState([]);
  // console.log(`Current Value of textState:${textToShow}`)

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value="";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      // console.log(newFoodItem)
    }
    // console.log(event)
    // setTextState(event.target.value);
  }
  return (<>
    <Container>
      <h1 className="Food-heading">Shopping list</h1>
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <ErrorMessage items={foodItems} />
      {/* <p>{textToShow}</p> */}
      <FoodItems items={foodItems} />
    </Container>
    {/* <Container>
      <p>Above is the list of list that are really helpful for listing.</p>
    </Container> */}
  </>)
}

export default App
