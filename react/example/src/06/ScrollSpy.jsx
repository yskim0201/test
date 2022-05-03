import React, { Component } from 'react';

export default class Scrollspy extends React.PureComponent {
  constructor(props) {
    super(props);
    this.wishList = [
      '제주도 여행',
      '경기도 여행',
      '제주도 여행',
      '경기도 여행',
      '제주도 여행',
      '경기도 여행',
      '제주도 여행',
      '경기도 여행',
      '제주도 여행',
      '경기도 여행',
      '제주도 여행',
      '경기도 여행',
      '제주도 여행',
      '경기도 여행',
    ];
    this.state = {
      todoList: this.wishList,
    };
    this.setRef = this.setRef.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
    window.addEventListener('scroll', this.checkPosition);
    //윈도우에서 스크롤 이동 이벤트 발생하면 checkPosition 구동되도록 등록
  }
  setRef(ref) {
    this.ref = ref; // 파라미터 ref로 전달받은 엘리먼트를 this.ref에 저장함
  }
  checkPosition() {
    //this.ref에 저장된 DOM 객체의 위치가 스크롤 화면 안/밖 여부 체크
    if (this.ref.getBoundingClientRect().top < window.innerHeight) {
      console.log('enter'); //페이지 목록 추가 코드를 넣으면 자동으로 목록 추가됨
    } else {
      console.log('exit');
      this.setState(({ todoList }) => ({
        todoList: [...todoList, this.wishList[Math.floor(Math.random() * 20)]],
      }));
    }
  }
  componentDidMount() {
    this.checkPosition();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition);
  }
  render() {
    return (
      <div>
        <div>
          {this.state.todoList.map((todo, i) => (
            <div key={`tl_${i}`}>{todo}</div>
          ))}
        </div>
        <div ref={this.setRef}>여기는 어디?</div>
      </div>

      //특수 프로퍼티 ref에 setRef() 함수를 콜백함수로 전달
      //div 엘리먼트를 getElemnetById() 함수로 얻어와서
      //전달받은 콜백함수에 파라미터로 전달함
    );
  }
}
