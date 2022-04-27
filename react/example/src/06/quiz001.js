import React, { Component } from 'react';

class Quiz001 extends Component {
    componentDidUpdate() { console.log('MyComponent 새로 고침'); }
    render() {return <div>   </div>;}
}

class MyPureComponent  extends React.PureComponent {
    componentDidUpdate() {console.log('MyPureComponent 새로고침');}
        render() {return <div>   </div>;}}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.listValue = [{name : "park"}, {name : "Lee"}];
        this.state = {version : 0};
        this.handleClick = this.handleClick.bind(this);
    }
}

export default Quiz001;
