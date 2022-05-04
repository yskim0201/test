const shallowequal = require("shallowequal");

const obj = {name : "park"};
const mylist = [1, 2, 3, obj];
const list1 = [1, 2, 3, obj];
const list2 = [1, 2, 3, {name : "park"}];

console.log(mylist === list1); //false
console.log(shallowequal(mylist, list1)); //true
console.log(shallowequal(list1, list2)); // false

//프로퍼티랑 state랑 달라지면 rerandering을 하는데
//randering 사이즈가 커지게 된다면 시간이 너무 많이 소요되기 때문에
//shallowequal를 사용한다.