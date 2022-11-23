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
    return(
        <NavLink to={path} className={navData => navData.isActive ? s.active : s.item}>{props.name}</NavLink>
    )
}

const Message = (props: MessageType) => {
    return(
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

    let dialogsElements= dialogs.map(d => <DialogItem name={d.name} id ={d.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
               {/*<DialogItem name={dialogData[0].name} id ={dialogData[0].id}/>*/}
               {/*<DialogItem name={dialogData[1].name} id ={dialogData[1].id}/>*/}
               {/*<DialogItem name={dialogData[2].name} id ={dialogData[2].id}/>*/}
            </div>

            <div className={s.message}>
                {/*<Message id={messageData[0].id} message={messageData[0].message}/>*/}
                {/*<Message id={messageData[1].id} message={messageData[1].message}/>*/}
                {/*<Message id={messageData[2].id} message={messageData[2].message}/>*/}

            </div>

        </div>
    )
}