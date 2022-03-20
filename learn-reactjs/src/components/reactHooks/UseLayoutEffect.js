import React, { useEffect, useLayoutEffect, useRef } from "react";

function UseLayoutEffect() {
  const inputRef = useRef(null);

  // Note: useLayoutEffect get called first before the useEffect hook then the useEffect after the useLayoutEffect
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    console.log((inputRef.current.value = "Obara"));
  }, []);
  return (
    <div>
      <input
        type="text"
        value="DOUGLAS"
        ref={inputRef}
        style={{ width: 400, height: 50 }}
      />
    </div>
  );
}

export default UseLayoutEffect;
