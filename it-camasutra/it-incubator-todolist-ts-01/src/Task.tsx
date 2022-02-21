import React , {ChangeEvent} from 'react';
import {TaskType} from "./ToDoList";

type TaskPropType = TaskType & {
    removeTask: (taskID:string)=> void
    changeTaskStatus:(taskID: string, isDone:boolean) => void
}

const Task = (props: TaskPropType) => {
    const completedClass = `task ${props.isDone ? 'completedTask' :''}`;
    const removeTask = () => {
        props.removeTask(props.id)
    }
    const changeTaskStatus = (e:ChangeEvent<HTMLInputElement>) => {
        props.changeTaskStatus(props.id,e.currentTarget.checked)
    }
    return (
            <li >
                <input type="checkbox"
                       onChange={changeTaskStatus}
                       checked={props.isDone}
                />
                <span className={completedClass}>{props.title}</span>
                <button onClick={removeTask}>x</button>
            </li>

    );
};

export default Task;