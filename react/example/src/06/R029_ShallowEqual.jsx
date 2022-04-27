import React, { Component } from 'react';

class R029_Shallowequal extends Component {
  constructor(props) {
    super(props);
    this.state = { StateString: 'react' };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqualArrays(this.state, nextState);
  } //지금 state와 바뀐 state 가 다르면 true를 return => render를 다시 호출

  componentDidMount() {
    const object = { react: '200' };
    const Array1 = ['리액트', object];
    const Array2 = ['리액트', object];
    const Array3 = ['리액트', { react: '200' }]; // 값은 같지만 object 변수와는 다른 객체이다

    console.log('shallowEqualArrays(Array1, Array2 : ' + shallowEqualArrays(Array1, Array2));
    console.log('shallowEqualArrays(Array2, Array3 : ' + shallowEqualArrays(Array2, Array3));
    this.setState({ StateString: 'react' });
  }

  buttonClick = (type) => {
    if (type === 'String') {
      this.setState({ StateString: 'react' });
    } else {
      this.setState({ StateArrayObj: ['react', { react: '200' }] }); //객체일 경우에는  render를 호출
    }
  };

  render() {
    console.log('render() 실행');
    return (
      <div>
        <button onClick={(e) => this.buttonClick('String')}> 문자열 변경 </button>
        <button onClick={(e) => this.buttonClick('ArrayObject')}>객체 배열 변경</button>
      </div>
    );
  }
}

export default R029_Shallowequal;
