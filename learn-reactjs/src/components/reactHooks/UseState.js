import React, { useState } from "react";

function UseState() {
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter + 1);
  };

  const Decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <button onClick={Decrement}>Decrement</button>
      {counter}
      <button onClick={Increment}>Increment</button>
    </div>
  );
}

export default UseState;
