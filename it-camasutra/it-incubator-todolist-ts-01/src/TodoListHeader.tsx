import React from 'react';
import AddTaskForm from "./AddTaskForm";

type TodoListHeaderPropsType = {
    title:string
}
const TodoListHeader = (props:TodoListHeaderPropsType) => {
    return (
        <>
            <h3>{props.title}</h3>
            <AddTaskForm />
        </>

    );
};

export default TodoListHeader;