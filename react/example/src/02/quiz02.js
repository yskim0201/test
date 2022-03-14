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

var {col, ...others} = cuteSlime;
console.log(cuteSlime);
