import React, { Component } from "react";

class ClassCounter extends Component {
  //   constructor(props) {
  //     super(props);

  //     //   # 일반적인 방법
  //     //   this.handleIncrease = this.handleIncrease.bind(this);
  //     //   this.handleDecrease = this.handleDecrease.bind(this);

  //     this.state = {
  //       // 사용할 초기값
  //       // 무조건 객체형태로
  //       counter: 0
  //     };
  //   }

  //   # 일반적인 방법
  //   handleIncrease() {
  //     console.log("increase");
  //   }

  //   handleDecrease() {
  //     console.log("decrease");
  //   }


  // babel class-properties 적용 되면 아래처럼 작성 가능
  // create-react-app으로 생성 시 기본으로 적용되어 있음
  state = {
    counter: 0
  };

  handleIncrease = () => {
    console.log("increase");
    // 함수형 업데이트 -> 2번씩 실행
    this.setState(state => ({
      counter: state.counter + 1
    }));
    this.setState(state => ({
      counter: state.counter + 1
    }));
  };

  handleDecrease = () => {
    console.log("decrease");

    // 이건 여러번 작성해도 1번만 실행
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default ClassCounter;
