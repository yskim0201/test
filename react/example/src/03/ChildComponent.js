import React, { Component } from 'react';

class ChildComponent extends Component {
    render() {
        return (
            <div classname = "message-container">
                <h2>자녀 컴포넌트</h2>
            </div>
        );
    }
}

export default ChildComponent;