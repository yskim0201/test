//프로퍼티의 기본값 지정
import React from 'react';
import PropTypes from 'prop-types';

class DefaultPropsComponent extends React.Component {
  render() {
    let message1 = '';
    if (this.props.boolValue === false) {
      // 프로퍼티 없으면 default값 전달
      message1 = 'boolValue 기본값이 false입니다';
    }
    let message2 = '';
    if (this.props.boolValueWithoutDefault === false) {
      // 프로퍼티 없으면 undefined 전달
      message2 = 'boolValueWithoutDefault 기본값이 false입니다';
    }
    return (
      <div className="message-container">
        {message1}
        {message2}
      </div>
    );
  }
}

DefaultPropsComponent.propTypes = {
  boolValue: PropTypes.bool,
  boolValueWithoutDefault: PropTypes.bool,
};

DefaultPropsComponent.defaultProps = {
  boolValue: false,
};

export default DefaultPropsComponent;
