import React from "react";
import {
    InitialStateType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


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

//export const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs)
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)


// import React from "react";
// import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
// import {Dialogs} from "./Dialogs";
// import {connect} from "react-redux";
// import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
// import {compose} from "redux";
//
//
// let mapStateToProps = (state) => {
//     return {
//         dialogsPage: state.dialogsPage,
//     }
// }
//
//
// let mapDispatchToProps = (dispatch) => {
//     return {
//         sendMessage: () => {
//             dispatch(sendMessageActionCreator())
//         },
//         updateNewMessageBody: (body) => {
//             dispatch(updateNewMessageBodyActionCreator(body))
//         }
//     }
// }
//
// export default compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     WithAuthRedirect
// )(Dialogs)
