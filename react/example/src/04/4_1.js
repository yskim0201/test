import React from 'react';

class StateExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { //상태 정의 / 컴포넌트가 만들어질 때 사용되는 변수 -> 컴포넌트 종료 시 사라지게 된다.
            loading : true, //초기값 / 객체형태
            formData : 'no data',
        };
        this.hnadleData = this.hnadleData.bind(this); // bind를 통해 this의 정확한 값이 들어갈 수 있다.
        setTimeout(this.hnadleData, 4000); // 4초후 함수 호출
    }
    hnadleData() {
        const data = 'new data'; // 지역변수 선언
        const {formData} = this.state; // 상태 정보중 formdata를 얻어옴 -> state의 선언한 변수 이름이 같을 뿐 동일한 것이 아님.
        this.setState({
            loading : false,
            formData : data + formData, //같은 이름으로 override가 된다고 생각.
        });
        //this.state.loading 은 현재 true
        console.log('loading값', this.state.loading);
        //이후 호출될 출력함수에서의 this.sate.loading은 false
    }
    render() {
        return (
            <div>
                {/*상태 데이터는 this.state로 접근 가능함. */}
                <span>로딩중 : {String(this.state.loading)}</span>
                <span>결과 : {this.state.formData}</span>
            </div>
        );
    }
}