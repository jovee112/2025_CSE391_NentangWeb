import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const handleDelete = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="state">
      <h1>Counter: {counter}</h1>
      <div classname="item">
        <button className="add-btn" onClick={incrementCounter}>Increment</button>
        <button className="delete-btn" onClick={decrementCounter}>Decrement</button>
        <button className="reset-btn" onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
}

export default App;