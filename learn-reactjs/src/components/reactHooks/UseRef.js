import React, { useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);

  const onClick = () => {
    // inputRef.current.focus(); // focus on the input after click of the button
    inputRef.current.value = ""; // clear the input onClick
  };
  return (
    <div>
      <h1>Douglas</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default UseRef;
