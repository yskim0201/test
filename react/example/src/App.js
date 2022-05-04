import React from 'react';
import Input from './06/Input'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "홍길동",
        }; 
        this.onChange = this.onChange.bind(this);
    }
    onChange(key, value) {
        this.setState({
            [key] : value,
        });
    }
    onFocus() {
        console.log("입력창 포커스")
    }
    render() {
        return (
            <>
                <Input
                    label = "이름"
                    name ="name" 
                    value = {this.state.name}
                    type ="text"
                    errorMessage = "이름을 입력해야 합니다"
                    autoFocus = {true}
                    onChange = {this.onChange}
                    onFocus = {this.onFocus}
                />
                <div>
                    <button>{this.state.name}</button>
                </div>
            </>
        );
    }
}

export default App;