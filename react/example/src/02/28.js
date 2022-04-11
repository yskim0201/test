//App => MyComponent : 속성 형태로 전달
class App extends React.Component {
    render() {
        return (
            <div className = "body">
                <MyComponent name = "message" />
            </div>
        );
    }
}

//this.props.name으로 참조(*단, 프로퍼티 내용을 바로 변경 불가)
class MyComponent extends React.Component {
    render() {
        const name = this.props.name; 
        //this.props.name = "~~~" 은 불가능

        return <span>{name}</span>; 
    }
}

//프로퍼티 자료형
//자바스크립트 자료형 모두 사용 가능
// 숫자, 문자열, 불리언, 객체, 배열, 함수 등등

//필수 사항은 아니지만 프로퍼티의 자료형을 정의하는 것이 좋음

import React from 'react';
import PropTypes from 'prop=types';

class PropsComponent extends React.Component {
    render() {
        return (
            <div className = "message=container">
                {this.props.name} //name 프로퍼티 내용 출력
                
            </div>
        );
    }
}

//자료형을 선언하는 예제
PropsComponent.propTypes = { // 자료형 선언 시 변수 propTypes 사용
    name : PropTypes.string, // 문자열 자료형으로 name을 선언
};

export default PropsComponent;

//문자열형 프로퍼티
import React, {Component} from 'react';
import PropsComponent from './03/PropsComponent';

class App extends Component {
    redner() {
        return (
            <PropsComponent
                name = "홍길동"
            />
        );
    }
}

export default App;

//다양한 자료형 프로퍼티
import React from 'react';
import ChildComponent from './03/ChildComponent';

class App extends React.Component {
    render() {
        return (
            <ChildComponent
                boolValue = {true} // 생략해도 true 전달, boolValue라인은 undefined 전달
                numValue = {1}
                arrayValue = { [1, 2, 3] }
                objValue = {{name : '제목', age = 30 }}
                nodeValue = {<h1>노드</h1>}
                funcValue = { () => {console.log('메세지');}}
            />
        );
    }
}

export default App;

import React from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends React.Component {
    render() {
        const { //객체 구조분해 활용하여 프로퍼티 값을 지역변수에 할당
            boolValue,
            numValue,
            arrayValue,
            objValue,
            nodeValue,
            funcValue,
        } = this.props;
    

    return (
        <div>
            <span>불리언값 : {boolValue}</span>
            <span>숫자값 : {numValue}</span>
            <span>배열값 : {arrayValue}</span>
            <span>객체값 : {String(objValue)}</span>
            <span>노드값 : {nodeValue}</span>
            <span>함수값 : {String(funcValue)}</span>
        </div>
    );
}

ChildComponent.propTypes = { // 객체형태로 프로퍼티 자료형 정의
    boolValue : PropTypes.bool,
    nameValue : PropTypes.number,
    arrayValue : PropTypes.arrayOf(PropTypes.number),
    objValue : PropTypes.object,
    nodeValue : PropTypes.node,
    funcValue : PropTypes.func,
}

export default ChildComponent;