import React, { useState } from "react";

function UseState() {
  const [inputValue, setInputValue] = useState("Douglas254");

  const onChange = (event) => {
    const newValue = event.target.value; // accessing the value in the input and store in newValue variable.
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="Enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
}

export default UseState;
