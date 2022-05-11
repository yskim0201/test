import React, { PureComponent } from 'react';

class Quiz extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      major: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.Change = this.Change.bind(this);
  }
  handleChange(e) {
    const { name, onChange } = this.state;
    if (onChange) {
      onChange(name, e.target.value);
    }
  }
  Change(e) {
    const { major, onChange } = this.state;
    if (onChange) {
      onChange(major, e.target.value);
    }
  }

  render() {
    return (
      <>
        <input name={this.handleChange} />
        <select major={this.Change}>
          <option value="Computer">Computer</option>
          <option value="Education">Education</option>
        </select>
        <ul>
          <li>이름 : {this.state.name}</li>
          <li>전공 : {this.state.major}</li>
        </ul>
      </>
    );
  }
}

export default Quiz;
