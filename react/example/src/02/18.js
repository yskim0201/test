//배열을 객체로 변환
const qs = 'banana=10&apple=20&orange=30';
function parse(qs) {
    const queryString = qs.substr(0);
    const chunks = queryString.split('&');
    return chunks
        .map((chunk) => {
            const [ key, value ] = chunk.split('=');
            return { key, value };
        })
        .reduce((result, item) => ({
            ...result,
            [item.key] : item.value,
        }), {});
}

const result = parse(qs);
console.log(result);