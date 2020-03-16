import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

// 액션 타입
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣어주세요.
const SET_DIFF = "counter/SET_DIFF";
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성함수
export const setDiff = diff => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// redux-thunk 사용 시
// export const increaseAsync = () => dispatch => {
//   setTimeout(() => dispatch(increase()), 1000);
// };
// export const decreaseAsync = () => dispatch => {
//   setTimeout(() => dispatch(decrease()), 1000);
// };

// redux-saga 사용 시
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

const INCREASE_ASYNC = "INCREASE_ASYNC";
const DECREASE_ASYNC = "DECREASE_ASYNC";

function* increaseSaga() {
  yield delay(1000);
  yield put(increase()); // put 특정 액션 디스패치
}
function* decreaseSaga() {
  yield delay(1000);
  yield console.log("--------");
  yield put(decrease());
}

// 모니터링 하면서 해당 액션이 오면 해당 사가가 실행되도록 처리
export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga); // 모든 INCREASE_ASYNC 액션을 처리
  yield takeLatest(DECREASE_ASYNC, decreaseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만 처리
  // takeLeading: 가장 먼저 디스패치된 액선만 처리
}

// 초기 상태
const initialState = {
  number: 0,
  diff: 1
};

// 리듀서
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      };
    default:
      return state;
  }
}
