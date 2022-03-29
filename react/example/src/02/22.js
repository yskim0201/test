//Promise 등장
// 어떤 작업의 결과가 성공이든 실패든 기다려서 결과를 얻어야 하는
//상황에서 사용. 성공의 결과와 실패의 결과가 반환됨

function findUser(id) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("waited 0.1 sec.");
            user = {
                id : id,
                name : "User" + id,
                email : id + "@test.com",
            };
            resolve(user); // 성공 종료시 리턴값
        }, 100);
    });
}

findUser(1).then(function (user) {
    console.log("user : ", user);
});

