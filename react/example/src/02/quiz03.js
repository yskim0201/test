var obj = {Name : "홍길동", Git : "wow1234"};
var test_obj = {test1 : 1, test2 : 2};

var combined = {
    ...obj,
    ...test_obj
};
console.log(combined);