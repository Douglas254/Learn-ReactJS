import React, { forwardRef, useImperativeHandle, useState } from "react";

// forwardRef allows us to transform the functional component and allow it to accept a reference from the parent
const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  // useImperativeHandle hook allows us to find functions based on the ref that can be called using that ref
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <div>
      <button>Button from Child</button>
      <h1> {toggle && <span>Toggle</span>}</h1>
    </div>
  );
});

export default Button;
