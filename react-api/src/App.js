import React from "react";
import UsersAsync from "./UsersAsync";
import UsersDefault from "./UsersDefault";
import UsersReducer from "./UsersReducer";
import Users from "./Users";
import { UsersProvider } from "./UsersContext";
import UsersContextApi from "./UsersContextApi";
import { UsersProvider2 } from "./UsersContext2";
import UsersContextApi2 from "./UsersContextApi2";

function App() {
  return (
    <>
      <UsersProvider2>
        <UsersContextApi2 />
      </UsersProvider2>

      <h5>Context</h5>
      <UsersProvider>
        <UsersContextApi />
      </UsersProvider>
      <hr />
      <h5>React-Async</h5>
      <Users />
      <hr />
      <h5>Custom-Async</h5>
      <UsersAsync />
      <hr />
      <h5>Default</h5>
      <UsersDefault />
      <hr />
      <h5>Reducer</h5>
      <UsersReducer />
      <hr />
    </>
  );
}

export default App;
