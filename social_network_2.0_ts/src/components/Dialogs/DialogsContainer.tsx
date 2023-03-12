import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";


type DialogsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsType) => {

    let state = props.store.getState().dialogsPage


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (body: string) => {
        let action = updateNewMessageBodyActionCreator(body)
        props.store.dispatch(action)
    }

    return (
       <Dialogs  updateNewMessageBody={onNewMessageChange} onSendMessageClick={onSendMessageClick}/>
    )
}