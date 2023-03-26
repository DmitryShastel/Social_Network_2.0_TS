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

export type ActionType = AddMessageActionType | UpdateMessageActionType


export type dialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Alex'}
    ] as Array<DialogsType>,

    messages: [
        {id: 10, message: 'hi'},
        {id: 2, message: 'buy'},
        {id: 3, message: 'buy now'}
    ] as Array<MessageType>,
    newMessageBody: '',
}

export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    let stateCopy;
    switch (action.type) {

        case SEND_MESSAGE: {
            let stateCopy = {...state}
            let body = stateCopy.newMessageBody
            stateCopy.newMessageBody = ''
            stateCopy.messages.push({id: new Date().getTime(), message: body})
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            stateCopy = {
                 ...state,
                 newMessageBody: action.body
             }
            return stateCopy
        }
        default:
            return state
    }
}

export const sendMessageActionCreator: SendMessageActionCreatorType = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyActionCreator: UpdateMessageActionCreatorType = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        body: body
    }
}