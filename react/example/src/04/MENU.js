import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MENU extends Component {
  render() {
    const { low, high } = this.props;
    var random = low.concat(high);

    const ran = (Math.floor(Math.random() * (random.length)));

    return (
      <div>
        <h1>점심 메뉴 추천</h1>
        <div> 메뉴는 {random[ran].menu}이고, </div>
        <div> 가격은 {random[ran].price}입니다. </div>
      </div>
    );
  }
}

MENU.propTypes = {
  low : PropTypes.arrayOf(PropTypes.object),
  high : PropTypes.arrayOf(PropTypes.object)
};

export default MENU;
