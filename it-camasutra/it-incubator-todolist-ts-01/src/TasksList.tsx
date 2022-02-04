import React from 'react';
import Task from "./Task";
import {TaskType} from "./ToDoList";
import ControlButtons from "./ControlButtons";

type TasksListPropsType = {
    tasks: Array<TaskType>
}

const TasksList = (props: TasksListPropsType) => {
    return (
        <>
            <ul>
                <Task {...props.tasks[0]}/>
                <Task {...props.tasks[1]}/>
                <Task {...props.tasks[2]}/>
                {/*<Task id={props.tasks[0].id}*/}
                {/*      title={props.tasks[0].title}*/}
                {/*      isDone={props.tasks[0].isDone}*/}
                {/*/>*/}
                {/*<li><input type="checkbox" checked={props.tasks[1].isDone}/> */}
                {/*    <span>{props.tasks[1].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.tasks[2].isDone}/>*/}
                {/*    <span>{props.tasks[2].title}</span></li>*/}
            </ul>
            <ControlButtons /> 
        </>

);
};

export default TasksList;