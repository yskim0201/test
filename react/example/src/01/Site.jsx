import React, { Component } from 'react'; // 컴포넌트 사용

class Site extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>참고 사이트</h2>
          <ul>
            <li>
              <a href="https://www.npmjs.com">npm</a>
            </li>
            <li>
              <a href="https://www.replit.com">replit</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Site;
