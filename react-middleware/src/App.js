import React from "react";
import "./test";
import CounterContainer from "./components/Counter";
import TodosContainer from "./components/Todos";
import PostListContainer from "./components/Posts";
import { Route } from "react-router-dom";
import PostPage from "./components/Post";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <TodosContainer />
      <Route path="/" component={PostListContainer} exact />
      <Route path="/:id" component={PostPage} />
    </div>
  );
}

export default App;
