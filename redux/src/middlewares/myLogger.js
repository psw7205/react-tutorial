const myLogger = store => next => action => {
  console.log(action);
  console.log("prev:", store.getState());
  const result = next(action); // 다음 미들웨어 (또는 리듀서) 에게 액션 전달
  console.log("next:", store.getState());

  return result; // dispatch(action) 결과물 기본: undefined
};

export default myLogger;
