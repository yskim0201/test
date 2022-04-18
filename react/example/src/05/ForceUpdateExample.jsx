import React, { Component } from 'react';

class ForceUpdateExample extends Component {
  constructor(props) {
    super(props);
    this.loading = true;
    this.formData = 'no data';
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = 'new data';
    this.loading = false;
    this.formData = data + this.formDatal;
    this.forceUpdate(); //setState 함수를 사용하지 않고 강제로 변경 가능
  }
  render() {
    return (
      <div>
        {/*상태 데이터는 this.state로 접근 가능*/}
        <span>로딩중 : {String(this.loading)}</span>
        <span>결과 : {this.formData}</span>
      </div>
    );
  }
}

export default ForceUpdateExample;
