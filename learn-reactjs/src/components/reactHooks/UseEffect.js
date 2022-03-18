import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffect() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  //   useEffect for making API calls

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments") // axios call to the API
      .then((response) => {
        // Grabs whatever it returns
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  }, []); // [] put the state to call the API each time is called

  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default UseEffect;
