import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  // 클래스 컴포넌트에서만 사용 가능
  componentDidCatch(error, info) {
    console.log('에러가 발생했습니다.');
    console.log({
      error,
      info,
    });
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <h1>에러 발생!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
