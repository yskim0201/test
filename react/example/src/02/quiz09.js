//map, reduce를 이용하여 같은 나이끼리 분류하시오.
var peoples = [
    {
        name : 'Alice',
        age : 21
    },
    {
        name : 'Max',
        age : 20
    },
    {
        name : 'Jane',
        age : 20
    }
];

// function keyDivide(peoples) {
//     return peoples.map((divide) => {
//         var key = divide.age + '세';
//         var tmp = {[key] : []};
//         tmp[key].push(divide.name);
//         return tmp;
//     });
// }

// const result = keyDivide(peoples);
// console.log(result);

var group = {
    20 : [
        'Max',
        'Jane',
         ],
    21 : [
        'Alice',
         ],
};

function makeGroup(peoples) {
    return peoples.reduce((newGroup, person) => {
        var age = person["age"] + "`세";
        if(!newGroup[age]) {
            newGroup[age] = [];
        } 
        newGroup[age].push(person.name);
        return newGroup;
    }, {});
}

const result = makeGroup(peoples);
console.log(result);