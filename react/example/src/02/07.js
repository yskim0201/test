//ES6 가변 변수

let num = 1;
num = num * 3;
console.log(num);

let str = '문자';
str = '새 문자';

let arr = [];
arr = [1, 2, 3];

let obj = {};
obj = {name : "내 이름"};

//ES6 불변 변수

const num1  = 1; 
num1 = 3;
console.log(num1); // const는 재할당이 불가능함.

const str1 = '문자';
str1 = '새 문자';

const arr1 = [];
arr1 = [1, 2, 3];

const obj1 = {};
obj1 = { name : '내 이름'};