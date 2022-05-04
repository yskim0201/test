import React, { useState, useEffect } from 'react';

function R031_Reacthook(props) {
  const [contents, setContents] = useState('[THIS IS REACT]');
  // 앞에는 변수, 뒤에는 함수
  useEffect(() => {
    console.log('useEffect');
  });

  return (
    <div style={{ padding: '0px' }}>
      <h2>{contents}</h2>
      <button onClick={() => setContents('[THIS IS HOOK]')}>버튼</button>
    </div>
  );
}
// setContents를 사용해 새로운 Contents 값이 들어간다.
export default R031_Reacthook;
