// map을 이용하여 배열에 저장된 숫자가 홀수 / 짝수 판별하시오.
const value = [5, 3, 8, 6, 5, 8, 6, 10, 45, 34, 21, 56];

function oddEven(value) {
    var i;
    value.map((oddeven) => {
        for (i = 0; i < value.length; i++) {
            if ((value[i])%2 == 0) {
                var odd = oddeven.splice('odd');
            } else {
                var even = oddeven.splice('even');
            }
        }
        return odd, even;
    })    
}

const result = oddEven(value);
console.log(result);


이거는 도저히 모르겠다;;;