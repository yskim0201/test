import React, { Component } from 'react';   // rcc 단축키 사용

class ex_component extends Component {
    render() {
        return (
            <h2>[New ex_component]</h2>
        )
    }
}

import React from 'react'; // rsc 단축키 사용

const ex_component = () => { // 화살표는 function으로 바꿔서도 된다.
    return (
        <div>
            
        </div>
    );
};

export default ex_component;