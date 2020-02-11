import React, { useState } from "react";

function Counter() {
  const [num, setNum] = useState(0);

  const inc = () => {
    setNum(prevNum => prevNum + 1);
  };

  const desc = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={inc}>+1</button>
      <button onClick={desc}>-1</button>
    </div>
  );
}

export default Counter;
