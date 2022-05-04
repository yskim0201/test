import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, e.target.value);
    }
  }
  componentDidMount() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }
  setRef(ref) {
    this.ref = ref;
  }

  render() {
    const { errorMessage, label, name, value, type, onFocus } = this.props;
    return (
      <label>
        {label}
        <input
          ref={this.setRef}
          id={`input_${name}`}
          value={value}
          tpye={type}
          onChange={this.handleChange} //input의 내용 변경되면 handleChange 호출
          onFocus={onFocus}
        />
        <div>{errorMessage && <span className="error">{errorMessage}</span>}</div>
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'price']),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};
Input.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  autoFocus: false,
  type: 'text',
};
export default Input;
