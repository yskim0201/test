import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.nameChange = this.nameChange.bind(this);
    this.majorChange = this.majorChange.bind(this);
  }
  nameChange(e) {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, e.target.value);
    }
  }
  majorChange(e) {
    const { major, onChange } = this.props;
    if (onChange) {
      onChange(major, e.target.value);
    }
  }
  render() {
    const { name, major } = this.props;
    return (
      <>
        <input name={name} onChange={this.nameChange} />
        <select name={major} onChange={this.majorChange}>
          <option value="Computer">Computer</option>
          <option value="Education">Education</option>
        </select>
      </>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Input;
