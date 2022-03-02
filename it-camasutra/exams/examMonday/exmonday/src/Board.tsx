import React from 'react';
import IncBtn from "./IncBtn";
import ResetBtn from "./ResetBtn";
import {MyButton} from "./MyButton";

type BoardPropsType = {
    number:number
    changeNumber: () =>void
    resetNumber:() => void
}
const Board = (props:BoardPropsType) => {
    const condition = props.number===5?"red":'';
    return (
        <div className='board'>
         <div className={`numberBoard ${condition}`}>{props.number}</div>
            <div className='buttons'>
                {/*<IncBtn number = {props.number}*/}
                {/*        changeNumber={props.changeNumber}*/}
                {/*        />*/}
                {/*<ResetBtn*/}
                {/*    number = {props.number}*/}
                {/*    resetNumber = {props.resetNumber}/>*/}
                <MyButton
                    onClick = {props.changeNumber}
                          disabled = {props.number===5}>
                    inc
                </MyButton>
                <MyButton
                    onClick = {props.resetNumber}
                    disabled = {props.number===0}
                >reset</MyButton>
            </div>

        </div>
    );
};

export default Board;