// 결과를 기다려야 하는 작업에서 Promise객체를 만들어 리턴하게 함
// return new Promise(function(resolve, reject) {...} )
//성공 결과는 resolve(), 실패 결과는 reject()로 반환

function devide(numA, numB) {
    return new Promise((resolve, reject) => {
        if (numB === 0) reject(new Error("Unable to devide by 0."));
        else resolve(numA / numB);
    });
}
devide(8, 2)
    .then((result) => console.log("성공 : ", result))
    .catch((error) => console.log("실패 : ", error));