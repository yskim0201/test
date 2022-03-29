const work = () => new Promise(//비동기 작업을 위해서 Promise 객체를 반환함
                (resolve, reject) => {//Promise 객체를 만들 때 함수를 인자로 제공함
                                      // 함수의 인자는 성공과 실패 시 호출할 함수 이름
                    var result = prompt("yes or no?", "yes"); // 비동기 작업
                    if(result === "yes")
                        resolve('작업 완료');
                    else
                        reject('작업 실패');
                }        
            );

work ().then((msg) => { //성공 시 호출
            console.log(msg);
        })
        .catch((msg) => { //실패 시 호출
            console.log(msg);
        });

