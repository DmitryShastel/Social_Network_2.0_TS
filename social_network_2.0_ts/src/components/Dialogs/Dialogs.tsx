import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number | string
}
type MessageType = {
    message: string
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               <DialogItem name='Dima' id ='1'/>
               <DialogItem name='Sasha' id='2'/>
               <DialogItem name='Alex' id='3'/>

            </div>
            <div className={s.message}>
                <Message message='hi'/>
                <Message message='buy'/>
                <Message message='buy now'/>

            </div>

        </div>
    )
}