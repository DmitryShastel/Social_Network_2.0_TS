import React from "react";
import {
    InitialStateType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    dialogsPage: InitialStateType
}

type MapStateDispatchType = {
    onSendMessageClick: () => void
    updateNewMessageBody: (body: any) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapStateDispatchType => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageActionCreator())
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        }
    }
}

export const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs)