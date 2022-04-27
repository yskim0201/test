//클래스형 컴포넌트와 함수형 컴포넌트 비교

import react = require("react");

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