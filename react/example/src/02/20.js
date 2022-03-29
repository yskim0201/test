//내장 비동기 함수 setTimeout(콜백함수, 지연시간)
//사용자 데이터를 얻어오는데 걸리는 시간을 시뮬레이션 하기 위해 사용

function findUser(id) {
    let user;
    setTimeout(function () {
        console.log("waited 0.1 sec.");
        user = {
            id : id,
            name : "User" + id,
            email : id + "@test.com",
        };
    }, 100); //데이터 얻어오는데 0.1초 걸린다고 가정
    return user;
}
const user = findUser(1);
console.log("user:", user);

//출력값
//user: undefined
//waited 0.1 sec.
//비동기함수이기 때문에 나중에 데이터가 오면 처리한다.

function findUserAndCallBack(id, cb) {
    setTimeout(function () {
        console.log("waited 0.1 sec.");
        const user = {
            id : id,
            name : "User" + id,
            email : id + "@test.com",
        };
        cb(user); //후처리 작업 호출
    }, 100); //데이터 얻어오는데 0.1초 걸린다고 가정
}
findUserAndCallBack(1, function (user) {
    console.log("user", user);
})