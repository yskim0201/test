import React from 'react';

class MyComponent extends React.Component {
    componentDidUpdate() { console.log('MyComponent 새로 고침'); }
    render() {return <div>   </div>;}
}

class MyPureComponent  extends React.PureComponent {
    componentDidUpdate() {console.log('MyPureComponent 새로고침');}
        render() {return <div>   </div>;}
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.listValue = [{name : "park"}, {name : "Lee"}];
        this.state = {version : 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.listValue[0].name = "Justin";
        this.setState({version : 0});
        setTimeout( () => {
            this.listValue[0].name = "None";
        }, 1000);
        setTimeout( () => {
            this.listValue.pop();
            this.setState({version : 2});
        }, 2000);
    }
    render() {
        return (
            <div className = "body">
                <MyComponent value = {this.state.version}/>
                <MyPureComponent value = {this.state.version}/>
                <button onClick={this.handleClick}>값 변경</button>
            </div>        
        );
    }
}
