import {ActionType, DialogsType, SendMessageActionCreatorType, UpdateMessageActionCreatorType} from "./state";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'


export type AddMessageActionType = {
    type: 'SEND-MESSAGE'
}
export type UpdateMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    body: string
}


export type SendMessageActionCreatorType = () => AddMessageActionType
export type UpdateMessageActionCreatorType = (text: string) => UpdateMessageActionType

export const dialogsReducer = (state: DialogsType, action: ActionType): DialogsType => {

}

//messages
export const sendMessageActionCreator: SendMessageActionCreatorType = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyActionCreator: UpdateMessageActionCreatorType = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        body: body
    }
}