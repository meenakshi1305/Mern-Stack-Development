import React, { useState } from "react";
import "./State.css"
const Counter = () => {
  const [count, setCount] = useState(0);
  const handle = () => {
    setCount(count - 1);
  };
  return (
    <div className="counter">
      <p>count {count}</p>
      <button onClick={() => setCount(count + 1)}> Increment</button>
      <button onClick={handle}> Decrement</button>
    </div>
  );
};

export default Counter;
