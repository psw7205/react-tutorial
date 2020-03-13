import { combineReducers } from "redux";
import counter from "./counter";
import todo from "./todo";

// combineReducers를 이용해 두 reducer 합치기
const rootReducer = combineReducers({
  counter,
  todo
});

export default rootReducer;
