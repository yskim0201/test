//배열 함수
const qs = 'banana=10&apple=20&orange=30'; //쿼리 스트링
function parse(qs) {
    var queryString = qs.substr(0);
    var chunks = queryString.split('&');
    //chunks = ['banana=10', 'apple=20', 'orange=30']

    var result = {};
    for (var i = 0; i < chunks.length; i++) {
        var parts = chunks[i].split('=');
        var key = parts[0];
        var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
        result[key] = value;
        console.log(result);
    }
    return result;
}
const params = parse(qs);
console.log(params);