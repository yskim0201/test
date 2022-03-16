var slime = {name : '슬라임'};
var att= {attribute : 'cute'};
var col = {color : 'purple'};

var cuteSlime = {
    ...slime,
    ...att
};
console.log(cuteSlime);

var purpleCuteSlime = {
    ...slime,
    ...att,
    ...col
};
console.log(purpleCuteSlime);

var {col, ...others} = cuteSlime; // 앞을 제외한 나머지 출력
console.log(cuteSlime);
