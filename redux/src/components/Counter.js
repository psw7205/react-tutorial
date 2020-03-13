import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, setDiff } from "../modules/counter";

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
  const { number, diff } = useSelector(({ counter }) => ({
    number: counter.number,
    diff: counter.diff
  }));

  // useDispatch: 리덕스 스토어의 dispatch 사용 할 수 있게 해주는 Hook
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
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
