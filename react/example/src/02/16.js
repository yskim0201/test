//ES6 forEach
const qs = 'banana=10&apple=20&orange=30';
function parse(qs) {
    const queryString = qs.substr(0);
    const chunks = queryString.split('&');
    let result = {};
    chunks.forEach((chunk) => {
        const [ key, value ] = chunk.split('=');
        result[key] = Number(value);
        console.log(result);
    });
    return result;
 }
 const params1 = parse(qs);
 console.log(params1);