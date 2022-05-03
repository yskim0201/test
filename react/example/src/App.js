import React from 'react';
import Input from './06/Input'

class App extends React.Component {
    render(){
        return (
            <Input 
                label = "이름" 
                name ="name" 
                value = "홍길동" 
                type ="text"
                errorMessage = "이름을 입력해야 합니다"
                autoFocus = {true}
            />
        );
    }
}

export default App;