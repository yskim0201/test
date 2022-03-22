//화살표 함수
//ES5
function add(first, second) {
    return first + second;
}

var add = function(first, second) {
    return first + second;
}

var add = function add(first, second) {
    return first + second;
}

//ES6
var add = (first, second) => {
    return first + second;
}

var add = (first, second) => first + second; // 결과값을 바로 반환할 때는 중괄호 생략 가능

var addAndMultiple = (first, second) => ({add:first+second, multiply:first*second});
// 객체를 반환할 때는 괄호 사용

function addNumber(num) {
    return function(value) { // 반환값이 함수
        return num + value;
    }
}

//화살표 함수로 변환한 예
var addNumber = num => value => num + value;
var addTwo = addNumber(2);
var result = addTwo(4);
console.log(result);