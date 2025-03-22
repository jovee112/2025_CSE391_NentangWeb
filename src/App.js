import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(prevcounter => prevcounter + 1);
  };

  const decrementCounter = () => {
    setCounter(prevcounter => prevcounter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        <option value="Yellow">Yellow</option>
        <option value="Orange">Orange</option>
      </select>
      <div className="state">
        <h1>Counter: {counter}</h1>
        <div className="item">
          <button className="add-btn" onClick={incrementCounter}>Increment</button>
          <button className="delete-btn" onClick={decrementCounter}>Decrement</button>
          <button className="reset-btn" onClick={resetCounter}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;