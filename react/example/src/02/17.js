//ES6 map
const qs = 'banana=10&apple=20&orange=30';
function parse(qs) {
    const queryString = qs.substr(0);
    const chunks = queryString.split('&');
    const result = chunks.map((chunk) => {
        const [ key, value ] = chunk.split('=');
        return { key : key, value : Number(value) };
    });
    console.log(result);
    return result;
}

const params1 = parse(qs);
console.log(params1);


//ES6 reduce
function sum(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
