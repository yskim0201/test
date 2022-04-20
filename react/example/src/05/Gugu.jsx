import React, { Component } from 'react';

class Gugu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
    };
  }
  render() {
    return (
      // form 태그, Input 태그 사용하여 제출하면
      // 정답률 보여주기 -> 다음 시간에
      <div>
        {this.state.first} X {this.state.second} = ?
      </div>
    );
  }
}

export default Gugu;
