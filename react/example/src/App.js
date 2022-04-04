import React from 'react';
import ChildComponent from './03/ChildComponent';

class App extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>부모컴포넌트</h1>
                </div>
                <div classname = "body">
                    <ChildComponent/>
                </div>
                    

            </div>
        );
    }
}

export default App;