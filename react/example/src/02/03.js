// ES5 문법
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [array1[0], array1[1], array2[0], array2[1]];
var combined = array1.concat(array2); // concat 이용
var combined = [].concat(array1, array2);
console.log(combined);

var fist = array1[0];
var second = array1[1]; // 인덱스로 배열 요소 추출
var three = array1[2] || 'empty'; // ||을 활용하여 배열 요소 없을 때 초기화
console.log(three);

function func() {
    var args = Array.prototype.slice.call(arguments); // 특수 변수를 활용하여 인자를 배열화
    var first = args[0];
    console.log(arguments);
    console.log(first);
    var others = args.slice(1); // 인덱스 범위 1번(두번째)부터 마지막까지 추출
    console.log(others);
}

func(1, 2, 3, 4, 5, 6, 7)

