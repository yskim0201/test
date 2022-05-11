import React from 'react';
import Input from './06/Input2'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            major : "",
        }; 
        this.onChange = this.onChange.bind(this);
    }
    onChange(name, value) {
        this.setState({
            [name] : value,
        });
    }
    render() {
        return (
            <>
                <h1>이름과 전공</h1>
                <Input
                    name ="name"
                    major = "major"
                    onChange = {this.onChange}
                />
                <ul>
                    <li>{this.state.name}</li>
                    <li>{this.state.major}</li>
                </ul>
            </>
        );
    }
}

export default App;