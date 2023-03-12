import {ActionType, dialogsPageType} from "./store";

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export type AddMessageActionType = {
    type: 'SEND-MESSAGE'
}
export type UpdateMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    body: string
}


export type SendMessageActionCreatorType = () => AddMessageActionType
export type UpdateMessageActionCreatorType = (body: string) => UpdateMessageActionType

export const dialogsReducer = (state: dialogsPageType, action: ActionType): dialogsPageType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: new Date().getTime(), message: body})
            return state

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageBody = action.body;
            return state;
        default:
            return state
    }
}

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