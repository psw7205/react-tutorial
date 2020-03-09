import React from "react";
import UsersAsync from "./UsersAsync";
import UsersDefault from "./UsersDefault";
import UsersReducer from "./UsersReducer";
import Users from "./Users";

function App() {
  return (
    <>
      <Users />
      <hr />
      <UsersAsync />
      <hr />
      <UsersDefault />
      <hr />
      <UsersReducer />
      <hr />
    </>
  );
}

export default App;
