import React from 'react';
import Counter from './06/Counter2'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 1,
        };
        //this.increaseCount = this.increaseCount.bind(this);
        //bind 함수를 사용하면 오류 해결 가능
    }
    increaseCount() {
        this.setState(({count}) => ({count : count + 1}));
    }

    render() {
        return (
            //<Counter count={this.state.count} onAdd={this.increaseCount.bind(this)}/>
            <div>
                현재 카운트 : {this.state.count}
                <button onClick={() => this.increaseCount()}>App 카운트 증가</button>
            </div>
        );
    }
}

export default App;