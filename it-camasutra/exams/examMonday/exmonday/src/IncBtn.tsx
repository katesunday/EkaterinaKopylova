import React from 'react';


 type IncBtnPropsType = {
     number:number
     changeNumber: (number:number) =>void
 }
const IncBtn = (props:IncBtnPropsType) => {

    // const incNum = (number:IncBtnPropsType) => {
    //     props.changeNumber(props.number)
    // }
    return (
        <div className='inc'>
            <button
                onClick={()=>props.changeNumber(props.number)}>inc</button>
        </div>
    );
};

export default IncBtn;