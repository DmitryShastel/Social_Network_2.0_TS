import React from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {
    dialogsPageType,
    DispatchType,
    sendMessageActionCreator, StoreType,
    updateNewMessageBodyActionCreator
} from "../../redux/state";


type DialogsType = {
    store: StoreType
}

export const Dialogs = (props: DialogsType) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message id={m.id} message={m.message}/>)
    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = () => {
        let body = newMessageElement.current ? newMessageElement.current.value : ''
        let action = updateNewMessageBodyActionCreator(body)
        props.store.dispatch(action)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.message}>
                <div>{messagesElements}</div>
            </div>
            <div>
                <textarea
                    ref={newMessageElement}
                    value={newMessageBody}
                    onChange={onNewMessageChange}></textarea>
                <button onClick={onSendMessageClick}>Add new message</button>
            </div>
        </div>
    )
}