import React from 'react';
import Task from "./Task";
import {TaskType} from "./ToDoList";
import ControlButtons from "./ControlButtons";
import {FilterValuesType} from "./App";

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskID:string)=> void
    changeFilter: (filter:FilterValuesType)  => void
}

const TasksList = (props: TasksListPropsType) => {
   const tasksComponentsList = props.tasks.map(task => {
       return(
        <Task
            key={task.id}
            {...task}  //пройтись мапом по всем компонентам с помощью спреад
            removeTask={props.removeTask}
        />
       )
   })
    return (
        <>
            <ul>
                {tasksComponentsList}
            </ul>
            <ControlButtons changeFilter={props.changeFilter} />
        </>

);
};

export default TasksList;