import React, {useState} from 'react';
import './App.css';
import {TaskType , Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
 type todolistsType = {
    id:string
    title: string
    filter: FilterValuesType
}

function App() {
    let todolistID1=v1();
    let todolistID2=v1();

    let [todolists,setTodolists]=useState<Array<todolistsType>>([
        {id:todolistID1,title:'What to learn',filter:'all'},
        {id:todolistID2,title:'What to buy',filter:'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    // let [filter, setFilter] = useState<FilterValuesType>("all");



    function removeTask(todolistId:string,id: string) {
        setTasks({...tasks,[todolistId]:tasks[todolistId].filter(el=>el.id!==id)})
        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
    }

    function addTask(todolistId:string,title: string) {
        // setTasks({...tasks,[todolistId]:tasks[todolistId].concat(newTask)})
        setTasks({...tasks,[todolistId]:[{id: v1(), title: title, isDone: false},...tasks[todolistId]]})

        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(todolistId:string,taskId: string, isDone: boolean) {
        setTasks({...tasks,[todolistId]:tasks[todolistId].map(el=>el.id ===taskId? {...el,isDone:isDone}:el)})
        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }
        //
        // setTasks([...tasks]);
    }
    const removeToDoList = (todolistId:string) => {
        setTodolists(todolists.filter(el=>el.id !==todolistId))
        delete tasks[todolistId]
    }


    // let tasksForTodolist = tasks;
    //
    // if (filter === "active") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === false);
    // }
    // if (filter === "completed") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === true);
    // }

    function changeFilter(todolistId:string,value: FilterValuesType) {
        setTodolists(todolists.map(el=>el.id===todolistId?{...el,filter:value}:el))
        // берем объект идем мапом и если в нем у элемента айдишка равна айдишке
        // из аргумента, то копируем остальной кусок объекта и даем туда новое
        // значение фильта - вэлью(второй аргумент)
    }


    return (
        <div className="App">
            {todolists.map((el)=>{
                let tasksForTodolist = tasks[el.id];

                if (el.filter === "active") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone === false);
                }
                if (el.filter === "completed") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone === true);
                }
            return(
                <Todolist
                    key = {el.id}
                    todoListId = {el.id}
                    title={el.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={el.filter}
                    removeToDoList = {removeToDoList}
                />
            )
        })}
        </div>
    );
}

export default App;
