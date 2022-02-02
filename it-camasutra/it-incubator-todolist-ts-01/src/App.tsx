import React from 'react';
import './App.css';
import ToDoList, {TaskType} from "./ToDoList";

function App() {
    const task_1: Array<TaskType> = [
        {id:1, title: "HTML", isDone: true},
        {id:2, title: "CSS", isDone: true},
        {id:3, title: "JS/TS", isDone: true},
    ]
    const task_2: Array<TaskType> = [
        {id:1, title: "Arrays", isDone: true},
        {id:2, title: "Videos", isDone: true},
        {id:3, title: "Other", isDone: false},
    ]
    const task_3: Array<TaskType> = [
        {id:1, title: "Methods", isDone: false},
        {id:2, title: "Errors", isDone: false},
        {id:3, title: "Smth else", isDone: false},
    ]
    return (
        <div className="App">
            <ToDoList title={"What to learn"} tasks={task_1} />
            <ToDoList title={"What to remember"} tasks={task_2} />
            <ToDoList title={"What to ask"} tasks={task_3} />
        </div>
    );
}

export default App;
