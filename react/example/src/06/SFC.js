import React from 'react';
import PropTypes from 'prop-types';

function SFC(props, context) {
    //클래스 컴포넌트의 this.props값과 동일
    const {somePropValue} = props;

    // 클래스 컴포넌트의 this.context와 동일
    const {someContextValue} = context;
    return <h1>Hello, {somePropValue}</h1>
}

SFC.propTypes = {somePropValue : PropTypes.any};
SFC.defaultProps = {somePropValue : 'default value'};

export default SFC;