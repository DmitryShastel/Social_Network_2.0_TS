import React from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {dialogsPageType, DispatchType} from "../../redux/state";


type DialogsType = {
    state: dialogsPageType
    dispatch: DispatchType
}

export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.message}>
                {messagesElements}
            </div>
            <div>
                <textarea></textarea>
                <button>Add new message</button>
            </div>
        </div>
    )
}