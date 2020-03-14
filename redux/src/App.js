import React from "react";
import "./test";
import CounterContainer from "./components/Counter";
import TodosContainer from "./components/Todos";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <TodosContainer />
    </div>
  );
}

export default App;
