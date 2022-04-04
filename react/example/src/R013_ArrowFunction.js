import React, { Component } from 'react';

class R013_ArrowFunction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrowFuc : "React 200",
            num : 3
        };
    }

    componentDidMount() {
        Function1(1);
        this.Function2(1,1);
        this.Function3(1,3);
        this.Function4();
        this.Function5(0, 2, 3);

        function Function1(num1) {
            return console.log(num1 + ". ES5 Function");
        }
    }

    Function2 = (num1, num2) => {
        let num3 = num1 + num2;
        console.log(num3+ '. Arrow Function : ' +this.state.arrowFuc);
    }

    Function3() {
        var this_blind = this;
        setTimeout(function() {
            console.log(this_blind.state.num+ '. ES5 Callback Function noBind : ');
            console.log(this.state.arrowFuc); //arrowFuc를 알 수가 없다. 윈도우에서 찾아오기 때문에
            // 정의된 컴포넌트 안에 정의가 되어 있어 찾을 수가 없다.
        }, 100);
    }

    Function4() {
        setTimeout(function() {
            console.log('4. ES5 CallBack Function Bind : '+this.state.arrowFuc);
        }.bind(this), 100); // 바인딩을 했기 때문에 오류가 발생하지 않는다.
    }

    Function5 = (num1, num2 ,num3) => {
        const num4 = num1 + num2 + num3;
        setTimeout(() => {
            console.log(num4+'. Arrow Callback Function : '+this.state.arrowFuc);
        }, 100); //화살표를 사용했기 때문에 바인딩을 안해도 오류가 발생하지 않는다.
    }

    render() {
        return (
            <h1>[THIS IS ArrowFunction ]</h1>
        )
    }
}

export default R013_ArrowFunction;