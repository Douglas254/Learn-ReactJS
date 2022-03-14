import React, { useState } from "react";

function UseReducer() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
        }}
      >
        Click Here
      </button>
      {/* <p>...</p> tag only appears when the boolean showText = true  */}
      {showText && (
        <b>
          <p>This is a Text</p>
        </b>
      )}
    </div>
  );
}

export default UseReducer;
