//ES6 배열과 객체 -> 무결성 문제 발생(내장 함수를 이용하여 변경하였기 때문에)
const arr2 = [];
arr2.push(1); // arr2 = [1]
console.log(arr2);
arr2.splice(0, 0, 0); //arr2 = [0, 1] -> 0번째에다가 0개를 0으로 바꿔라
console.log(arr2);
arr2.pop(); // arr2 = [0] -> 가장 뒤에 있는 것을 꺼냄
console.log(arr2);

const obj2 = {};
obj2['name'] = '내 이름' // obj2 = { name : ' 내 이름' }
console.log(obj2);
Object.assign(obj2, {name : '새 이름'}); // obj2 = { name : '새 이름' }
console.log(obj2);
delete obj2.name; // obj2 = {}
console.log(obj2);

//ES6 배열과 객체 -> 새롭게 정의하면 무결성 문제 해결 가능
const num1 = 1;
const num2 = num1 * 3; // num2 = 3

const str1 = '문자';
const str2 = str1 + '추가'; // str2 = '문자추가'

const arr3 = [];
const arr4 = arr3.concat(1); // arr4 = [1]
const arr5 = [...arr4, 2, 3]; // arr5 = [1, 2, 3]
const arr6 = arr5.slice(0, 1); // arr6 = [1], arr5 = [1, 2, 3]
const [first, ...arr7] = arr5; // arr7 = [2, 3], first = 1

const obj3 = {name : '내 이름', age : 20};
const obj4 = {...obj3, name : '새 이름'}; // obj4 = {name : '새 이름', age : 20}
const {name, ...obj5} = obj4; // obj5 = {age : 20}