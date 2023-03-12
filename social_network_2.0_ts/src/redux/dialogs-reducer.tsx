import {dialogsPageType, DialogsType, MessageType} from "./store";

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

type ActionType = AddMessageActionType | UpdateMessageActionType


type DialogsReducerType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Alex'}
    ],

    messages: [
        {id: 10, message: 'hi'},
        {id: 2, message: 'buy'},
        {id: 3, message: 'buy now'}
    ],
    newMessageBody: '',
}

export const dialogsReducer = (state: DialogsReducerType = initialState, action: ActionType): dialogsPageType => {
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