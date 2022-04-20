import React, { Component } from 'react';

class SetStateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      react: 'react',
    };
    this.ChangeStr = this.ChangeStr.bind(this);
  }
  ChangeStr() {
    this.setState(({ react }) => ({
      react: (react = '리액트'),
    }));
  }
  render() {
    return (
      <div>
        {this.state.react}
        <button onClick={this.ChangeStr}>리액트 Change</button>
      </div>
    );
  }
}

export default SetStateExample;
