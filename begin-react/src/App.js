import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";
import ClassStyle from "./ClassStyle";
import Props from "./Props";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputTest from "./InputTest";
import InputsTest from "./InputsTest";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Wrapper>
          <div>
            <Hello />
          </div>
          <div>
            <ClassStyle />
          </div>
        </Wrapper>

        <div>
          <Props color="white" name="prop params name" />
          <Props color="yellow" />
        </div>

        <Counter />

        <InputTest />
        <InputsTest />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
