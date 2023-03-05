import React from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {
    dialogsPageType,
    DispatchType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/state";


type DialogsType = {
    state: dialogsPageType
    dispatch: DispatchType
}

export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message}/>)
    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let newMessageBody = props.state.newMessageBody

    let addMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let onMessageChange = () => {
        let text = newMessageElement.current ? newMessageElement.current.value : ''
        let action = updateNewMessageBodyActionCreator(text)
        props.dispatch(action)
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
                    onChange={onMessageChange}></textarea>
                <button onClick={addMessage}>Add new message</button>
            </div>
        </div>
    )
}