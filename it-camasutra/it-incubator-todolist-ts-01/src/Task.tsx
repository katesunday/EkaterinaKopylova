import React from 'react';
import {TaskType} from "./ToDoList";

type TaskPropType = TaskType & {
    removeTask: (taskID:string)=> void
}

const Task = (props: TaskPropType) => {
    return (
            <li>
                <input type="checkbox"
                       checked={props.isDone}/>
                <span>{props.title}</span>
                <button onClick={ () => props.removeTask(props.id) }>x</button>
            </li>

    );
};

export default Task;