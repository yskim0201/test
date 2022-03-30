// map을 이용하여 배열에 저장된 숫자가 홀수 / 짝수 판별하시오.
const value = [5, 3, 8, 6, 5, 8, 6, 10, 45, 34, 21, 56];

// 첫번째 방법
// function oddEven(value) {
//     const result = value.map((oddeven) => {
        
//         // if (oddeven % 2 == 0) {
//         //     return 'even'
//         // } else {
//         //     return 'odd';
//         // }
    
//     });
//     return result;    
// }

// const result = oddEven(value);
// console.log(result);

//두번째 방법
function oddEven(value) {
    const result = value.map((oddeven) => ((oddeven % 2 == 0 ) ? 'even' : 'odd'));
    return result;
}

const result = oddEven(value);
console.log(result);