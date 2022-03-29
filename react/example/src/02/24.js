const work1 = () => 
    new Promise((resolvev) => {
        setTimeout( () => resolvev("작업1 완료!"), 2000);
});
const work2 = () =>
    new Promise((resolvev) => {
        setTimeout( () => resolvev("작업2 완료!"), 3000);
});
const work3 = () =>
    new Promise((resolvev) => {
        setTimeout( () => resolvev("작업3 완료!"), 1000);
});
function nextWork() {
    console.log("다음 작업");
}

work1 ()
    .then ((msg1) => {
        console.log(msg1);
        return work2();
    })
    .then ((msg2) => {
        console.log(msg2);
        return work3();
    })
    .then ((msg3) => {
        console.log(msg3);
        nextWork();
    })