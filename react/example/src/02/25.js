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

//work2 => work3
//work1, nextwork 순서 상관없을 때

work2 ()
    .then ((msg2) => {
        console.log(msg2);
        return work3();
    })
    .then ((msg3) => {
        console.log(msg3);
    })
work1().then ((msg1) => {
    console.log(msg1);
})
nextWork();

//aync, await 사용
async function Ordering() {
    await work1().then((msg) => console.log(msg));
    await work2().then((msg) => console.log(msg));
    await work3().then((msg) => console.log(msg));
    nextWork();
    return;
}
Ordering();