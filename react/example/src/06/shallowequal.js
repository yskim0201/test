const shallowequal = require("shallowequal");

const obj = {name : "park"};
const mylist = [1, 2, 3, obj];
const list1 = [1, 2, 3, obj];
const list2 = [1, 2, 3, {name : "park"}];

console.log(mylist === list1); //false
console.log(shallowequal(mylist, list1)); //true
console.log(shallowequal(list1, list2)); // false