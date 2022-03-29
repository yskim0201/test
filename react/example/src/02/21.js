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
});
work2(function (msg2) {
    console.log(msg2);
});
work3(function (msg3) {
    console.log(msg3);
});
nextWork();

//순서대로 작업을 하게 하려면
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