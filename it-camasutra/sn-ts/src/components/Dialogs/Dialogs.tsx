import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id:number
    name:string
}
type MessagePropsType = {
    text:string
}

const DialogItem = (props:DialogItemPropsType) => {
    let path = '/dialogs/' + props.id
    return(
    <div className={styles.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}
const Message = (props:MessagePropsType) => {
  return(
      <div className={styles.message}>
          {props.text}
      </div>
  )
}
const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
         <div className={styles.dialogsItems}>
            <DialogItem id={1} name={'Kate'}/>
             <DialogItem id={2} name={'Philip'}/>
             <DialogItem id={3} name={'Mama'}/>
             <DialogItem id={4} name={'Tanya'}/>
             <DialogItem id={5} name={'Anna'}/>
         </div>
            <div className={styles.messages}>
                <Message text={'Hello'}/>
                <Message text={'Hooray'}/>
                <Message text={'studying?'}/>
                <Message text={'I learn JS!'}/>
                <Message text={'How are you?'}/>
            </div>
        </div>
    );
};

export default Dialogs;