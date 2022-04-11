function work1() {
    return new Promise((resolve) => { //작업이 제대로 끝나면 resolve, 그렇지 않으면 reject
        setTimeout(() => resolve("작업 1완료!"), 2000);
    });
}

function work2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("작업 2완료"), 1000);
    });
}

function nextWork() {
    console.log("다음 작업");
}

work1()
.then(function (msg) { //resolve에서 반환된 값은 then의 파라미터로 받는다.
    console.log(msg);
    work2()
        .then(function(msg) {
            console.log(msg);
    nextWork(); //then 안에 있는 애들만 기다린다, then 밖으로 빼면 먼저 동작한다.
    })
});

// 두번째 방법
// work1()
//     .then(function (msg) { 
//     console.log(msg);
//         return work2()
//     })
//     .then(function(msg) {
//             console.log(msg);
//     nextWork();   
//     });