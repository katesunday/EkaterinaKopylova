import React , {useState} from 'react';
import './App.css';
import ToDoList , {TaskType} from "./ToDoList";
import {v1} from "uuid";

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    console.log(v1())
    const [tasks , setTasks] = useState<Array<TaskType>>(
        [
            {id: v1() , title: "HTML" , isDone: true} ,
            {id: v1() , title: "CSS" , isDone: false} ,
            {id: v1() , title: "JS/TS" , isDone: true} ,
        ]
    )

    const [filter , setFilter] = useState<FilterValuesType>('all')

    const changeFilter = (filter:FilterValuesType) => {
      setFilter(filter)
    }

    const getFilteredTasksForRender = () => {
        switch (filter) {
            case "completed":
                return tasks.filter(t => t.isDone === true)
            case "active":
                return tasks.filter(t => t.isDone === false)
            default:
                return tasks
        }
    }

    const FilteredTasksForRender = getFilteredTasksForRender()
    // let task_2: Array<TaskType> = [
    //     {id: 1 , title: "Arrays" , isDone: true} ,
    //     {id: 2 , title: "Videos" , isDone: true} ,
    //     {id: 3 , title: "Other" , isDone: false} ,
    // ]
    // let task_3: Array<TaskType> = [
    //     {id: 1 , title: "Methods" , isDone: false} ,
    //     {id: 2 , title: "Errors" , isDone: false} ,
    //     {id: 3 , title: "Smth else" , isDone: false} ,
    // ]

    const removeTask = (taskID: string) => {
        const filteredTasks = tasks.filter(task => task.id !== taskID)
        setTasks(filteredTasks)
        console.log(tasks)
    }

    const addTask = (title:string) => {
        //    const newTask: TaskType = {id: v1(),title: title,isDone: false
        // }
        // const updatedTasks = [newTask,...tasks]
        setTasks([ {
                   id: v1(),
                   title,
                   isDone: false
            },...tasks])
    }

    return (
        <div className="App">
            <ToDoList title={ "What to learn" }
                      tasks={ FilteredTasksForRender }
                      removeTask={ removeTask }
                      changeFilter={changeFilter}
                      addTask = {addTask}
            />
            {/*<ToDoList title={"What to remember"} tasks={task_2} />*/ }
            {/*<ToDoList title={"What to ask"} tasks={task_3} />*/ }
        </div>
    );
}

export default App;