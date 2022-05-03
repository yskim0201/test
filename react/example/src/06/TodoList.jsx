import React, { Component } from 'react';

//filter() 함수가 중간에 개입되면 킷값이 변경되어 의미가 없어지는데
//킷값이 변경되지 않도록 하기 위해서는 고유한 킷값으로 보통 이용함

//todoList.filter(todo => todo.finished).map((todo,i) => <div key={`tl_${i}`}>{todo.taskName}</div>)
//{todoList.map(todo => <div key = {todo.taskName}>{todo.taskName}</div>)}

class Todolist extends React.PureComponent {
  render() {
    const todoList = [
      { taskName: '빨래하기', finished: false },
      { taskName: '공부하기', finished: true },
    ];
    const todos = todoList.map((todo) => <div>{todo.taskName}</div>);
    return (
      <div>
        <div>{todoList[0].taskName}</div>
        <div>{todoList[1].taskName}</div>

        {todos}

        <div>
          {todoList.map((todo) => (
            <div>{todo.taskName}</div>
          ))}
        </div>

        <div>
          {todoList.map((todo, i) => (
            <div key={`tl_${i}`}>{todo.taskName}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Todolist;
