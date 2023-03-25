import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";

import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";


export const DialogsContainer: React.FC = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState().dialogsPage


                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageActionCreator())
                    }

                    let onNewMessageChange = (body: string) => {
                        store.dispatch(updateNewMessageBodyActionCreator(body))
                    }

                    return <Dialogs
                        updateNewMessageBody={onNewMessageChange}
                        onSendMessageClick={onSendMessageClick}
                        dialogsPage={state}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}




const SuperDialogsContainer = connect ()(Dialogs)