//state 내용 정리
import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true, // 객체이므로 ;이 아닌 ,이다.
      formData: 'no data',
    };
    this.handleData = this.handleData.bind(this); //항상 binding을 해줘야 한다
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data'; // 지역변수 선언
    const { formData } = this.state;
    this.setState({
      loading: false,
      formData: data + formData,
    });
    console.log('loading 값', this.state.loading);
  }

  render() {
    return (
      <div>
        <span>로딩중 : {String(this.state.loading)}</span>
        <span>결과 : {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;




/*state를 사용할 때 주의할 점
생성자에서 반드시 초기화해야한다.
state값을 변경할 때는 setState() 함수를 반드시 사용해야 한다.
setState() 함수는 비동기로 처리되며, setState() 코드 이후로 연결된 함수들의
실행이 완료된 시점에 화면 동기화 과정을 거친다.*/





/*setState() 함수의 마지막 인자로 함수를 전달하여 처리 */
//1번째 방법
// handleData() {
//   const data = 'new data';
//   this.setState((prevState) => ({
//     loading : false,
//     formData : data + prevState.formData,
//   }));
// }




//2번째 방법
// handleData() {
//   const data = 'new data';
//   this.setState(({formData}) => ({
//     loading : false,
//     formData : data + formData,
//   }))
// }