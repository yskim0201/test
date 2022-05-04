//클래스형 컴포넌트와 함수형 컴포넌트 비교

import react = require("react");
import Todolist from "./TodoList";

class PlanApp extends react.Component {
    render() {
        const { onButtonClick, hasPlan } = this.props;

        return (
            <div className = "body">
                {hasPlan ? <TodaysPlan/> : null}
                <button onClick = {onButtonClick}>
                    계획없음
                </button>
            </div>
        );
    }
}

function SFCPlanApp(props) {
    const { onButtonClick, hasPlan } = props;

    return (
        <div className = "body">
            {hasPlan ? <TodaysPlan/> : null}
            <button onClick = {onButtonClick}>
                계획없음
            </button>
        </div>
    )
}


//quiz
class ClassComponent extends react.Component {
    render() {
        let {
            BooleanTrueFalse
        } = this.props
        return (
            <div style = {{padding : "0px"}}>
                {BooleanTrueFalse ? '2. ' : '1. '}
                {BooleanTrueFalse.toString()}
            </div>
        )
    }
}

function SFCClassComponent(props) {
    let {BooleanTrueFalse} = props;

    return (
        <div style = {{padding : "0px"}}>
            {BooleanTrueFalse ? '2. ' : '1. '}
            {BooleanTrueFalse.toString()}
        </div>
    )
}

//quiz
function FunctionComponent(props) {
    let { contents } =props;
    return (
        <h2>
            {contents}
        </h2>
    )
}

class FunctionCom extends react.Component {
    render() {
        let { contents } = this.props

        return (
            <h2>
              {contents}
            </h2>
        )
    }
    
}

