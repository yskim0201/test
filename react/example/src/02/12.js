//ES5 객체확장 표현식
var x = 0;
var y = 0;
var obj = { x : x, y : y }; //키 값과 변수명이 동일함

var randomKeyString = 'other';
var combined = {};
combined['one' + randomKeyString] = 'some value'; // 연산 결과를 키값으로 활용

var obj2 = {
    x : x,
    methodA : function() { console.log('A'); }, //함수를 할당하려면 function 사용
    methodB : function() { return 0; },
};

//ES6 객체확장 표현식
var x = 0;
var y = 0;
var obj = { x, y };

var randomKeyString = 'other';
var combined = {
    ['one' + randomKeyString] : 'some value',
    //대괄호 이용하면 계산된 값을 키로 활용 가능
};

var obj2 = {
    x,
    methodA() { console.log('A'); }, //함수를 할당할 때 function 생략 가능
    methodB() { return 0; },
};

obj2.methodA();
console.log(obj2.x);