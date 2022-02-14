import React , {useState,KeyboardEvent} from 'react';

type AddTaskFormPropsType = {
    addTask: (title:string) =>void
}
const AddTaskForm = (props:AddTaskFormPropsType) => {
    const [title,setTitle] = useState<string>('')
    console.log(title)
    const onClickAddTask = () => {
        props.addTask(title)
        setTitle('')
    }
    const onKeyPressSetTitle = (e:KeyboardEvent<HTMLInputElement>) => {
      if(e.key === 'Enter'){
          props.addTask(title)
          setTitle('')
      }
    }
    return (
        <div>
            <input value={title}
                onChange={(e)=> setTitle((e.currentTarget.value))}
                   onKeyPress={onKeyPressSetTitle}
            />
            <button onClick={onClickAddTask}>+</button>
        </div>
    );
};

export default AddTaskForm;