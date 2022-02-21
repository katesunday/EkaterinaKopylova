import React from 'react';
import Task from "./Task";
import {TaskType} from "./ToDoList";
import ControlButtons from "./ControlButtons";
import {FilterValuesType} from "./App";

type TasksListPropsType = {
    tasks: Array<TaskType>
    filter: FilterValuesType
    removeTask: (taskID:string)=> void
    changeFilter: (filter:FilterValuesType)  => void
    changeTaskStatus:(taskID: string, isDone:boolean) => void

}

const TasksList = (props: TasksListPropsType) => {
   const tasksComponentsList = props.tasks.map(task => {
       return(
        <Task
            key={task.id}
            {...task}  //пройтись мапом по всем компонентам с помощью спреад
            removeTask={props.removeTask}
            changeTaskStatus={props.changeTaskStatus}
        />
       )
   })
    const emptyMessage = <span style={{fontSize:'14px'}}>Task list is empty. Change filter or add task.</span>
    const tasksList =  tasksComponentsList.length
            ?
            <ul>
                {tasksComponentsList}
            </ul>
            : emptyMessage
    return (
        <>
            {tasksList}
            <ControlButtons
                changeFilter={props.changeFilter}
                filter={props.filter}
            />
        </>

);
};

export default TasksList;