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
    const changeTaskStatus = (taskID: string, isDone:boolean) =>{
        setTasks(tasks.map(task => task.id === taskID ? {...task, isDone: isDone}: task))
    }

    return (
        <div className="App">
            <ToDoList title={ "What to learn" }
                      tasks={ FilteredTasksForRender }
                      removeTask={ removeTask }
                      changeFilter={changeFilter}
                      addTask = {addTask}
                      filter={filter}
                      changeTaskStatus={changeTaskStatus}
            />
            {/*<ToDoList title={"What to remember"} tasks={task_2} />*/ }
            {/*<ToDoList title={"What to ask"} tasks={task_3} />*/ }
        </div>
    );
}

export default App;
