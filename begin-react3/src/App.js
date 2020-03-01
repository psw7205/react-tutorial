import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';

// sentry 사용

function App() {
  const user = {
    id: 1,
    username: 'velopert',
  };

  // user가 없으면 오류
  // 오류 창은 개발환경에서만 보여짐
  // 배포시 x 버튼을 눌러 끈 화면이 보여짐
  return (
    <ErrorBoundary>
      <User />
    </ErrorBoundary>
  );
}

export default App;
