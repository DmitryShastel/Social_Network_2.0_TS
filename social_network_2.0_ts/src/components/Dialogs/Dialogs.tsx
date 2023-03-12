import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {dialogsPageType} from "../../redux/store";


type DialogsType = {
    updateNewMessageBody: (body: string) => void
    onSendMessageClick: () => void
    dialogsPage: dialogsPageType
}

export const Dialogs = (props: DialogsType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message id={m.id} message={m.message}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target ? e.target.value : ''
        props.updateNewMessageBody(body)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'>
                </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Add new message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}