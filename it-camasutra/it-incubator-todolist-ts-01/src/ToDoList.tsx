import React from 'react';
import TodoListHeader from "./TodoListHeader";
import TasksList from "./TasksList";
import {FilterValuesType} from "./App";

type ToDoListPropsType = {
    title: string
    tasks: Array<TaskType>
    filter: FilterValuesType
    removeTask: (taskID:string)=> void
    changeFilter: (filter:FilterValuesType)  => void
    addTask: (title:string) =>void
    changeTaskStatus:(taskID: string, isDone:boolean) => void
}
export type TaskType ={
    id: string
    title: string
    isDone: boolean

}

const ToDoList = (props: ToDoListPropsType) => {
  return(
      <div className="App">
          <div>
              <TodoListHeader title={props.title}
                              addTask = {props.addTask}
                              filter={props.filter}
              />
              <TasksList
                  tasks={props.tasks}
                  removeTask={props.removeTask}
                  changeFilter = {props.changeFilter}
                  filter={props.filter}
                  changeTaskStatus={props.changeTaskStatus}
              />
          </div>
      </div>
  )
}

export  default ToDoList;