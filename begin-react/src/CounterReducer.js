import React, { useReducer } from "react";

function numReducer(state, action) {
  switch (action.type) {
    case "PLUS":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      throw new Error("unhandled action");
  }
}

function CounterReducer() {
  const [num, dis] = useReducer(numReducer, 0);

  const inc = () => {
    dis({ type: "PLUS" });
  };

  const desc = () => {
    dis({ type: "MINUS" });
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={inc}>+1</button>
      <button onClick={desc}>-1</button>
    </div>
  );
}

export default CounterReducer;
