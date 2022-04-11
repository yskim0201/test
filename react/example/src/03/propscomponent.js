import React, { Component } from 'react';
import PropTypes from 'prop=types';

class propscomponent extends Component {
    render() {
        return (
            <div className = "message-container">
                {this.props.name}
            </div>
        );
    }
}

propscomponent.propTypes = {
    name : PropTypes.string,
};

export default propscomponent;