import React from 'react';
import TodoListHeader from "./TodoListHeader";
import TasksList from "./TasksList";
import {FilterValuesType} from "./App";

type ToDoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID:number)=> void
    changeFilter: (filter:FilterValuesType)  => void
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
              <TasksList
                  tasks={props.tasks}
                  removeTask={props.removeTask}
                  changeFilter = {props.changeFilter}
              />
          </div>
      </div>
  )
}

export  default ToDoList;