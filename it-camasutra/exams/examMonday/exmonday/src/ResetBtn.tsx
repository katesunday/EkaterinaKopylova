import React from 'react';

type ResetBtnPropsType = {
    number:number
    resetNumber: (number:number) =>void
}
const ResetBtn = (props:ResetBtnPropsType) => {

    return (
        <div>
            <button disabled={props.number === 0}
                onClick={()=>props.resetNumber(props.number)}>reset</button>
        </div>
    );
};

export default ResetBtn;