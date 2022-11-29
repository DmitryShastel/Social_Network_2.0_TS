import React from "react";
import s from './Dialogs.module.css'
import {Message, MessageType} from "./Message/Message";
import {DialogItem, DialogItemType} from "./DialogItem/DialogItem";

export type DialogsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}

export const Dialogs = (props: DialogsType) => {

   let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message id={m.id} message={m.message}/>)

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