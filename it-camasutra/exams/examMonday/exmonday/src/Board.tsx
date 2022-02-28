import React from 'react';
import IncBtn from "./IncBtn";
import ResetBtn from "./ResetBtn";
import {AppPropsType} from "./App";

type BoardPropsType = {
    number:number
    changeNumber: (number:number) =>void
    resetNumber:(number:number) => void
}
const Board = (props:BoardPropsType) => {
    const condition = props.number===5?"red":'';
    return (
        <div className='board'>
         <div className={`numberBoard ${condition}`}>{props.number}</div>
            <div className='buttons'>
                <IncBtn number = {props.number}
                        changeNumber={props.changeNumber}
                        />
                <ResetBtn
                    number = {props.number}
                    resetNumber = {props.resetNumber}/>
            </div>

        </div>
    );
};

export default Board;