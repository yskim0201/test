//생명주기 함수 사용
import React from 'react';

class LifeCycleExample extends React.Component {
    static getDerivedStateFromProps() { // 2 --> 1
        console.log('getDerivedStateFromProps 호출');
        return {};
    }
    constructor(props) { // 1
        super(props);
        this.state = {};
        console.log('constructor 호출');
    }
    componentDidMount() { // 4
        console.log('componentDidMount 호출');
        this.forceUpdate();
    }
    componentDidUpdate() { // --> 5
        console.log('componentDidUpdate 호출');
    }
    componentWillUnmount() { // -> 사라질 때 호출
        console.log('componentWillUnmount 호출');
    }
    getSnapeshotBeforeUpdate() { // --> 4
        console.log('getSnapshotBeforeUpdate 호출');
        return {};
    }
    shouldComponentUpdate() { // --> 2
        console.log('shouldComponentUpdate 호출');
        return false;
    }
    render() { // 3 --> 3
        console.log('render 호출');
        return null;
    }
}

export default LifeCycleExample;
