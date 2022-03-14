// ES6의 객체 처리
var objectOne = {one : 1, two : 2, other : 0};
var objectTwo = {three : 3, four : 4, other : -1};

var combined = {
    ...objectOne,
    ...objectTwo // 덮어씀
};
console.log(combined);
// combined = { one : 1, two : 2, three : 3, four : 4, other : -1}

var combined = {
    ...objectTwo,
    ...objectOne // 순서 변경
}
console.log(combined);
// combined = { one : 1, two : 2, three : 3, four : 4, other : 0}
var {other, ...others} = combined;
console.log(other, others);
// others = {one : 1, two : 2, three : 3, four : 4}