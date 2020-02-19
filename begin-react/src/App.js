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
import List from "./List";
import CreateList from "./CreateList";
import ContextSample from "./ContextAPI";
import CounterReducer from "./CounterReducer";
import CreateListReducer from "./CreateListReducer";
import CustomHookList from "./CustomHookList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <ContextSample />
        <CustomHookList />
        <CreateListReducer />
        <CounterReducer />
        <CreateList />
        <List
          obj_list={[
            { id: 1, name: "first name", address: "first Address" },
            { id: 2, name: "second name", address: "second Address" }
          ]}
        />
        <InputsTest />
        <InputTest />
        <Counter />
        <div>
          <Props color="blue" name="prop params name" />
          <Props color="gray" />
        </div>
        <Wrapper>
          <div>
            <Hello />
          </div>
          <div>
            <ClassStyle />
          </div>
        </Wrapper>
      </div>
    </div>
  );
}

export default App;
