import React from 'react';
import PropTypes from 'prop-types';

function SFC(props, context) {
    //클래스 컴포넌트의 this.props값과 동일
    const {somePropValue} = props;

    // 클래스 컴포넌트의 this.context와 동일
    const {someContextValue} = context;
    // 위 두 줄이 constructor 역할
    // 아래가 render 역할

    return <h1>Hello, {somePropValue}</h1>
}

SFC.propTypes = {somePropValue : PropTypes.any};
SFC.defaultProps = {somePropValue : 'default value'};

export default SFC;