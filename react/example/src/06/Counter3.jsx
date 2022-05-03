import React, { Component } from 'react';

class Counter3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increaseCount = this.increaseCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }
  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  resetCount() {
    this.setState({ count: 0 });
  }
  render() {
    return (
      <div>
        현재카운트 : {this.state.count}
        <button
          onClick={this.increaseCount}
          //버튼이 클릭되면 호출되는 콜백 함수
          onMouseOut={this.resetCount}
          //마우스가 빠져나가면 호출되는 콜백 함수
        >
          카운트 증가
        </button>
        버튼 밖으로 커서가 움직이면 0으로 초기화 됩니다.
      </div>
    );
  }
}

export default Counter3;
