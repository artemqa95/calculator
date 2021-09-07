import React, {useState} from 'react'
import './styles.css'
import {value} from '../../constants/text.json'
import Action from "./Action/Action";
import actions from './actions.json';

const Calculator = () => {
    const [currentValue, setCurrentValue] = useState(0)
    const [inputValue, setInputValue] = useState(currentValue)

    const onChangeInput = (event) => {
        const value = event.target.value
        setInputValue(value)
    }

    const onApplyAction = (counted, isEqualType = false) => {
        setCurrentValue(counted)
        if (isEqualType) setInputValue(counted)
    }

    return <div className={'container'}>
        <div className={'content'}>
            <div className={'content-header'}>
                <label>
                    <div>{`${value}:`}</div>
                    <input type="text"
                           onChange={onChangeInput}
                           value={inputValue}
                           className={'content-header-field'}
                    />
                </label>
            </div>
            <div className={'content-footer'}>
                {Object.keys(actions).map(actionType => {
                    return <Action type={actionType}
                                   key={actionType}
                                   currentValue={currentValue}
                                   newValue={inputValue}
                                   onApplyAction={onApplyAction}/>
                })}
            </div>
        </div>
    </div>
}
export default Calculator