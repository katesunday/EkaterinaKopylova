import React from 'react';
import AddTaskForm from "./AddTaskForm";
import {FilterValuesType} from "./App";

type TodoListHeaderPropsType = {
    title:string
    addTask: (title:string) =>void
    filter:FilterValuesType
}
const TodoListHeader = (props:TodoListHeaderPropsType) => {
    return (
        <>
            <h3 className='title'>{props.title}
                <div className='headerFilter'>{props.filter}</div>
            </h3>

            <AddTaskForm
                addTask = {props.addTask}
            />
        </>

    );
};

export default TodoListHeader;