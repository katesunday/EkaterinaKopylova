import React from 'react';
import TodoListHeader from "./TodoListHeader";
import Task from "./Task";
import TasksList from "./TasksList";

type ToDoListPropsType = {
    title: string
    tasks: Array<TaskType>
}
export type TaskType ={
    id: number
    title: string
    isDone: boolean
}

const ToDoList = (props: ToDoListPropsType) => {
  return(
      <div className="App">
          <div>
              <TodoListHeader title={props.title} />
              <TasksList tasks={props.tasks} />
          </div>
      </div>
  )
}

export  default ToDoList;