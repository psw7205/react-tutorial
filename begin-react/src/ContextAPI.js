import React, { useState, createContext, useContext } from "react";

const ContextTest = createContext("set default value");

// function Child({ text }) {
//   return <div>{text}</div>;
// }

// function Parent({ text }) {
//   return <Child text={text} />;
// }

// function GrandParent({ text }) {
//   return <Parent text={text} />;
// }

// function ContextSample() {
//   return <GrandParent text="Good" />;
// }

function Child() {
  const text = useContext(ContextTest);
  return <div>{text}</div>;
}

function Parent() {
  return <Child />;
}

function GrandParent() {
  return <Parent />;
}

function ContextSample() {
  const [val, setVal] = useState(true);
  return (
    <ContextTest.Provider value={val ? "Good" : "Bad"}>
      <GrandParent /><button onClick={() => setVal(!val)}>Button</button>
    </ContextTest.Provider>
  );
}

export default ContextSample;
