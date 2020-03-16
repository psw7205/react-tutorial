import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { increase, decrease, setDiff } from "../modules/counter";
import { increaseAsync, decreaseAsync } from "../modules/counter";

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = e => {
    // e.target.value -> 문자열 int로 형변환 해야함
    onSetDiff(parseInt(e.target.value));
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

function CounterContainer() {
  // useSelector: 리덕스 스토어 상태 조회 Hook
  // param으로 store.getState()로 호출되었을 때 값
  const { number, diff } = useSelector(
    ({ counter }) => ({
      number: counter.number,
      diff: counter.diff
    }),
    shallowEqual
  );

  // useSelector Hook 을 통해 매번 렌더링 될 때마다 새로운 객체 { number, diff }를 생성
  // 상태가 바뀌었는지 확인을 할 수 없어서 매번 새로 렌더링
  // 아래 처럼 각각 따로 불러오던가
  // const number = useSelector(state => state.counter.number);
  // const diff = useSelector(state => state.counter.diff);
  // 2번쨰 파라미터로 비교 하는 함수 추가
  // (left, right) => { return left.number === right.number && left.diff === right.diff; }
  // true가 나오면 리렌더링 X, false 서로 달라야지만 새로 렌더링
  // react-redux에서 shallowEqual 함수 사용 가능

  // useDispatch: 리덕스 스토어의 dispatch 사용 할 수 있게 해주는 Hook
  const dispatch = useDispatch();
  const onIncrease = () => {
    // dispatch(increase());
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    // dispatch(decrease());
    dispatch(decreaseAsync());
  };
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
