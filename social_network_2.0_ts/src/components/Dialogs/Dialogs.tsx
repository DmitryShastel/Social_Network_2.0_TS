import React from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {addNewMessageActionCreator, dialogsPageType, DispatchType} from "../../redux/state";


type DialogsType = {
    state: dialogsPageType
    dispatch: DispatchType
    newMessageText: string
}

export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message}/>)
    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let addMessage = () => {
        props.dispatch(addNewMessageActionCreator())
        console.log(props.state.messages)
    }

    let onMessageChange = () => {
        let text = newMessageElement
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.message}>
                {messagesElements}
            </div>
            <div>
                <textarea
                    ref={newMessageElement}
                    value={props.newMessageText}
                    onChange={onMessageChange}></textarea>
                <button onClick={addMessage}>Add new message</button>
            </div>
        </div>
    )
}