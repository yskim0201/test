let fruits = ['Apple', 'Banana', 'Orange', 'Strawberry']

fruits.push("Grape");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.splice(1, 2);
console.log(fruits);


//무결성함수를 사용하여 변환
const fruits1 = ['Apple', 'Banana', 'Orange', 'Strawberry']
const fruits2 = fruits1.concat("Grape");
console.log(fruits2);

const fruits3 = fruits2.slice(0, 4);
console.log(fruits3);

const [del1, ...fruits4] = fruits3;
console.log(fruits4);

const fruits5 = fruits4.slice(0, 1);
console.log(fruits5);
