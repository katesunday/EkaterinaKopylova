import React , {ChangeEvent} from 'react';
import {MyButton} from "./MyButton";

type SettingBoardPropsType = {
    minNumber:number
    maxNumber:number
    showMinNumber: (number:number) =>void
    setMinNumber:(minNumber:number)=>void
    setMaxNumber:(maxNumber:number)=>void
}
const SettingBoard = (props:SettingBoardPropsType) => {
const chooseMinNumber = (e:ChangeEvent<HTMLInputElement>) => {
    props.setMinNumber(Number(e.currentTarget.value))
}
const chooseMaxNumber = (e:ChangeEvent<HTMLInputElement>) => {
        props.setMaxNumber(Number(e.currentTarget.value))
    }
const changeNumberHandler = () => {
  props.showMinNumber(props.minNumber)
    localStorage.setItem('min',JSON.stringify(props.minNumber))
    localStorage.setItem('max',JSON.stringify(props.maxNumber))
}
const setCondition = props.minNumber<0||props.maxNumber<0?"belowZero":'warning';
    return (
        <div className='board'>

            <input type="number" id="setMax" onChange={chooseMaxNumber} value={props.maxNumber}/>
            <p className='desc-p'>set Max value for counter</p>

            <input type="number" id="setMin" onChange={chooseMinNumber} value={props.minNumber}/>
            <p className='desc-p'>set Min value for counter</p>
             <MyButton className='setBtn' onClick={changeNumberHandler}
                       disabled={props.minNumber<0||props.maxNumber<0||props.minNumber===props.maxNumber}>
                 Set</MyButton>
            <p className={setCondition}> number can't be less than zero</p>
        </div>
    );
};

export default SettingBoard;