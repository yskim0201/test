//기존 변수 내용 치환 방법
var list = [0, 1];
var item1 = list[0];
var item2 = list[1];
var item3 = list[2] || -1; //배열 내용이 없으면 -1를 저장, 초기화에 이용

var temp = item2; //item2와 item1의 내용 치환하기 위해서 
item2 = item1;
item1 = temp;

var obj = {
    key1 : 'one',
    key2 : 'two',
};

var key1 = obj.key1; //생성된 변수명과 키값이 같음에 주의
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value'; // 내용이 없으면 대신 초기화
var newKey1 = key1;


//ES6 내용 치환
var list = [0, 1];
var [ //배열 구조분해는 인덱스 위치에 따라 할당
    item1, //대괄호 사이에 추출할 값의 인덱스 위치에 변수 배치
    item2,
    item3 = -1, //값이 없으면 기본값 활용
] = list;
[item2, item1] = [item1, item2]; // 두 변수의 내용 치환

var obj = {
    key1 : 'one',
    key2 : 'two',
};
var {
    key1 : newKey1,
    key2,
    key3 = 'default key3 value',
} = obj;

var [item1, ...otherItems] = [0, 1, 2];
var { key1, ...others }= { key1 : 'one', key2 : 'two' };
//otherItems = [1, 2]
//others = { key2: 'two' }