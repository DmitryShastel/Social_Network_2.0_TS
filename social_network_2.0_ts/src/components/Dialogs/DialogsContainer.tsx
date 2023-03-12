import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";


type DialogsContainerType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsContainerType) => {

    let state = props.store.getState().dialogsPage


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            onSendMessageClick={onSendMessageClick}
            dialogsPage={state}
        />
    )
}