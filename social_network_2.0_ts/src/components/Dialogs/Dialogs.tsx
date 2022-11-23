import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number | string
}
type MessageType = {
    message: string
    id: number
}


const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id
    return (
        <NavLink to={path} className={navData => navData.isActive ? s.active : s.item}>{props.name}</NavLink>
    )
}

const Message = (props: MessageType) => {
    return (
        <div>{props.message}</div>
    )
}

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Alex'}
    ]

    let messages = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'buy'},
        {id: 3, message: 'buy now'}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message id={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.message}>
                {messagesElements}
            </div>

        </div>
    )
}