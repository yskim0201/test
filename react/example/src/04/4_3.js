//필수로 전달해야 하는 프로퍼티 정의

import React from 'react';
import PropTypes from 'prop-types';

class ChildComponent2 extends React.Component {
    render() {
        const {
            requiredStringValue,
        } = this.props;
        return (
            <div>
                <div>필수값 : {requiredStringValue}</div>
            </div>
        );
    }
}

ChildComponent2.propTypes = {
    requiredStringValue:propTypes.string.isRequired, //필수 프로퍼티 저장
}

export default ChildComponent2;

