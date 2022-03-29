//비동기 함수
//콜백 함수 : 다른 함수에 매개변수에 저장되어 전달되는 함수로
//당장 호출되지 않고 특정할 수 없는 시기에 뒤에서 호출됨
//자바스크립트에서 많이 사용됨

function findUserAndCallBack(id, cb) {
    const user = {
        id : id,
        name : "User" + id,
        email : id + "@test.com",
    };
    cb(user);
}

findUserAndCallBack(1, function(user) {
    console.log("user:", user);
});

