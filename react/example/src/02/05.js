// ES5의 객체 처리
var objectOne = {one : 1, two : 2, other : 0};
var objectTwo = {three : 3, four : 4, other : -1};

var combined = {
    one : objectOne.one, // one이라는 키의 값을 추출
    two : objectOne.two,
    three : objectTwo.three,
    four : objectTwo.four
};

var combined = Object.assign({}, objectOne, objectTwo); // {}객체에 하나씩 덮어 씀
console.log(combined);
// combined = { one : 1, two : 2, three : 3, four : 4, other : -1}
var combined = Object.assign({}, objectTwo, objectOne); // 덮어쓰는 순서 변경
// combined = {one : 1, two : 2, three : 3, four : 4, other : 0}
console.log(combined);
var others = Object.assign({}, combined);
delete others.other;
console.log(others);
// others = {one : 1, two : 2, three : 3, four : 4}