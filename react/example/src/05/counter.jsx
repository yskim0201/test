import React, { Component } from 'react';

class counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    };
    this.increaseCount = this.increaseCount.bind(this); //binding을 진행
    this.decreaseCount = this.decreaseCount.bind(this);
    this.setCount = this.setCount.bind(this);
  }
  increaseCount() {
    this.setState(({ count }) => ({
      //구조분해를 통해서 count를 받아옴, 구조분해를 할 때는 키값과 동일한 이름으로 사용을 해야한다
      count: count + 1,
    }));
  }
  decreaseCount() {
    this.setState(({ count }) => ({
      count: count - 1,
    }));
  }
  setCount() {
    this.setState(({ count }) => ({
      count: this.props.count,
    }));
  }
  render() {
    return (
      <div>
        현재 카운트 : {this.state.count}
        <button onClick={this.increaseCount}>INCREASE</button>
        <button onClick={this.decreaseCount}>DECREASE</button>
        <button onClick={this.setCount}>SETCOUNT</button>
      </div>
    );
  }
}

export default counter;
