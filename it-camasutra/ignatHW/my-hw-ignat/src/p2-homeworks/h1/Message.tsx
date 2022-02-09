import React from 'react'
import * as url from "url";
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props:MessagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.divAva}>
                <img className={s.ava} src={props.avatar} alt='#'/>
            </div>

            <div className={s.bgMessage}>
                <h5>{props.name}</h5>
                <p>{props.message}</p>
                <span className={s.time}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
