import React from 'react';
import {TaskType} from "./ToDoList";

type TaskPropType = TaskType

const Task = (props: TaskPropType) => {
    return (
            <li>
                <input type="checkbox" checked={props.isDone}/>
                <span>{props.title}</span>
            </li>

    );
};

export default Task;