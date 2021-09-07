import Button from "../../Button/Button";
import actions from '../actions.json'
import {isNumber} from "../../../helpers/validation";

const Action = ({type, currentValue, newValue, onApplyAction, ...rest}) => {
    const actionByType = {
        divide: () => currentValue/Number(newValue),
        multiply: () => currentValue*Number(newValue),
        minus: () => currentValue-Number(newValue),
        plus: () => currentValue+Number(newValue),
        equal: () => currentValue
    }

    const isEqualType = type === 'equal'

    const onClickHandler = () => {
        const counted = actionByType[type]
        onApplyAction(counted, isEqualType)
    }

    return <Button {...rest} onClick={onClickHandler} disabled={!isEqualType && !isNumber(newValue)}>
        {actions[type]}
    </Button>
}

export default Action