import { combineReducers } from "redux";
import counter from "./counter";
import todo from "./todo";
import posts from "./posts";

// combineReducers를 이용해 두 reducer 합치기
const rootReducer = combineReducers({
  counter,
  posts,
  todo
});

export default rootReducer;
