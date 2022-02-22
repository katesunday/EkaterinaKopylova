import React , {useRef} from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsDataPropsType , MessageDataPropsType } from "../../redux/state";


type DialogsPropsType = {
    dialogs:Array<DialogsDataPropsType>
    messages: Array<MessageDataPropsType>
}

const Dialogs = (props:DialogsPropsType) => {

    const dialogsElements = props.dialogs.map(dialog =>{
        return (
            <DialogItem id={dialog.id} name={dialog.name}/>
        )
    })
    const messagesElements = props.messages.map(message => (
        <Message text={message.message}/>
    ))
    let newMessageElement = useRef<HTMLTextAreaElement | null>(null);
    const sendMessage = () => {
        if(newMessageElement.current){
            let text = newMessageElement.current.value
            alert(text)
        }
    }
    return (
        <div className={styles.dialogs}>
         <div className={styles.dialogsItems}>
             {dialogsElements}
         </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <textarea ref={newMessageElement}/>
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Dialogs;