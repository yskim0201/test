import React from 'react';

class StateExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { //상태 정의
            loading : true, //초기값
            formData : 'no data',
        };
        this.hnadleData = this.hnadleData.bind(this);
        setTimeout(this.hnadleData, 4000); // 4초후 함수 호출
    }
    hnadleData() {
        const data = 'new data';
        const {formData} = this.state; // 상태 정보중 formdata를 얻어옴
        this.setState({
            loading : false,
            formData : data + formData,
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