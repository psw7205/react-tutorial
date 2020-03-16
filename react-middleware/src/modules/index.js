import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import todo from "./todo";
import posts, { postsSaga } from "./posts";
import { all } from "redux-saga/effects";

// combineReducers를 이용해 두 reducer 합치기
const rootReducer = combineReducers({
  counter,
  posts,
  todo
});

export function* rootSaga() {
  yield all([counterSaga(), postsSaga()]); // all 배열 안의 여러 사가를 동시에 실행
}

export default rootReducer;
