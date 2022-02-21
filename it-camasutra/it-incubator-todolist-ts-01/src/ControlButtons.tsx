import React from 'react';
import {FilterValuesType} from "./App";

type ControlButtonsType = {
    filter:FilterValuesType
    changeFilter: (filter:FilterValuesType)  => void
}
const ControlButtons = (props:ControlButtonsType) => {
    const onCLickSetFilter = (filter:FilterValuesType) => () => {
        props.changeFilter(filter)
    }
    return (
        <div>
            <button className={props.filter === 'all'? 'activeBtn':''} onClick={onCLickSetFilter('all')}>All</button>
            <button  className={props.filter === 'active'? 'activeBtn':''} onClick={onCLickSetFilter('active')}>Active</button>
            <button className={props.filter === 'completed'? 'activeBtn':''} onClick={onCLickSetFilter('completed')}>Completed</button>
        </div>
    );
};

export default ControlButtons;