import React from 'react';
import {FilterValuesType} from "./App";
type ControlButtonsType = {
    changeFilter: (filter:FilterValuesType)  => void
}
const ControlButtons = (props:ControlButtonsType) => {
    const onCLickSetFilter = (filter:FilterValuesType) => () => {
        props.changeFilter(filter)
    }
    return (
        <div>
            <button onClick={() => {onCLickSetFilter('all')}}>All</button>
            <button onClick={() => {onCLickSetFilter('active')}}>Active</button>
            <button onClick={() => {onCLickSetFilter('completed')}}>Completed</button>
        </div>
    );
};

export default ControlButtons;