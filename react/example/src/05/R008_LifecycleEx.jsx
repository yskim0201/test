import React, { Component } from 'react';

class R008Lifecycleex extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps Caal : ' + props.prop_value);
    return { tmp_state: props.prop_value };
  }
  constructor(props) {
    super(props);
    this.state = {};
    console.log('1. constructor Call');
  }

  componentDidMount() {
    console.log('4. componentDidMount Call');
    console.log('5. tmp_state : ' + this.state.tmp_state);
    this.setState({ tmp_state2: true });
  }

  shouldComponentUpdate(props, state) {
    // 변경 단계 생명주기 함수
    // return 값이 true일 경우 render 함수 한 번 더 호출.
    console.log('6. shouldComponentUpdate Call / tmp_state2 = ' + state.tmp_state2);
    return state.tmp_state2;
  }

  render() {
    console.log('3. render Call');
    return <h1>[THIS IS SHOULDCOMPONENTUPDATE FUNCTION]</h1>;
  }
}

export default R008Lifecycleex;
