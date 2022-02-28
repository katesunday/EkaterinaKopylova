import React from 'react';
import {AppPropsType} from "./App";

type ResetBtnPropsType = {
    number:number
    resetNumber: (number:number) =>void
}
const ResetBtn = (props:ResetBtnPropsType) => {

    return (
        <div>
            <button disabled={props.number === 0 || props.number ===5}
                onClick={()=>props.resetNumber(props.number)}>reset</button>
        </div>
    );
};

export default ResetBtn;