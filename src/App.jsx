import { useState } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const sortHandler = (e) => {
    setUserInput(e.target.value);
  };
  const bubbleSort = () => {
    if (userInput != "") {
      let inputNumbers = userInput.split(",");
      let inputNumberArray = inputNumbers.map(Number);
      if (!inputNumberArray.includes(NaN)) {
        for (let i = 0; i < inputNumberArray.length; i++) {
          for (let j = 0; j < inputNumberArray.length - i - 1; j++) {
            if (inputNumberArray[j] > inputNumberArray[j + 1]) {
              var temp = inputNumberArray[j];
              inputNumberArray[j] = inputNumberArray[j + 1];
              inputNumberArray[j + 1] = temp;
            }
          }
        }
        return inputNumberArray.toString();
      }
    }
  };
  return (
    <>
      <div>
        <h1>Here is the Bubble sort app</h1>
        <span>Please enter the comma separeated Numbers: </span>{" "}
        <input type="text" onChange={sortHandler} />
        <span>{bubbleSort()}</span>
      </div>
    </>
  );
}

export default App;
