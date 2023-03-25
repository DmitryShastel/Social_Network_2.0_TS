import React from "react";
import {
    InitialStateType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


// export const DialogsContainer: React.FC = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                     let state = store.getState().dialogsPage
//
//
//                     let onSendMessageClick = () => {
//                         store.dispatch(sendMessageActionCreator())
//                     }
//
//                     let onNewMessageChange = (body: string) => {
//                         store.dispatch(updateNewMessageBodyActionCreator(body))
//                     }
//
//                     return <Dialogs
//                         updateNewMessageBody={onNewMessageChange}
//                         onSendMessageClick={onSendMessageClick}
//                         dialogsPage={state}
//                     />
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

type MapStatePropsType = {
    dialogsPage: InitialStateType
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageActionCreator())
        },
        updateNewMessageBody: (body: any) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        }
    }
}

export const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs)