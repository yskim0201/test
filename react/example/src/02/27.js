//비동기 처리 방식


// function work1() {
//     setTimeout(() => console.log("작업1 완료!"), 2000);
//   }
//   function work2() {
//     setTimeout(() => console.log("작업2 완료!"), 3000);
//   }
//   function work3() {
//     setTimeout(() => console.log("작업3 완료!"), 1000);
//   }
//   function nextWork() {
//     console.log("다음 작업");
//   }
//   work1();
//   work2();
//   work3();
//   nextWork();
// nextWork -> work3 -> work1 -> work2 순서



// function work1(onDone) {
//     setTimeout(() => onDone('작업1 완료!'), 2000);
// }
// function work2() {
//     setTimeout(() => console.log('작업2 완료!'), 3000);
// }
// function work3() {
//     setTimeout(() => console.log('작업3 완료!'), 1000);
// }
// function nextWork() {
//     console.log('다음 작업');
// }

// work1(tmp1);

// function tmp1(msg1) {
//     console.log(msg1);
//     work2();
//     work3();
//     nextWork();
// }
// work1 -> nextWork -> work3 -> work2
// work1이 가장 먼저 실행되도록 함수를 집어넣어줌.


// function work1(onDone) {
//     setTimeout(() => onDone('작업1 완료!'), 2000);
// }
// function work2(onDone) {
//     setTimeout(() => onDone('작업2 완료!'), 3000);
// }
// function work3() {
//     setTimeout(() => console.log('작업3 완료!'), 1000);
// }
// function nextWork() {
//     console.log('다음 작업');
// }

// work1(function (msg1) {
//     console.log(msg1);
//     work2(function (msg2) {
//         console.log(msg2);
//         work3();
//         nextWork();
//     });
// });
// work1 -> work2 -> nextWork -> work3


// 시간순에 상관없이 순서대로 출력하게 하려면
function work1(onDone) {
    setTimeout(() => onDone('작업1 완료!'), 2000);
}
function work2(onDone) {
    setTimeout(() => onDone('작업2 완료!'), 3000);
}
function work3(onDone) {
    setTimeout(() => onDone('작업3 완료!'), 1000);
}
function nextWork() {
    console.log('다음 작업');
}

work1(function (msg1) {
    console.log(msg1);
    work2(function (msg2) {
        console.log(msg2);
        work3(function (msg3) {
            console.log(msg3);
            nextWork();
        });
    });
});
//work1 -> work2 -> work3 -> nextWork