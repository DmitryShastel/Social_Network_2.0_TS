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


export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}

let initialState = {
   users: [
       {
           id: new Date().getTime(),
           photoUrl: 'https://www.denofgeek.com/wp-content/uploads/2021/12/the-matrix-resurrections-agent-smith-hugo-weaving.jpg?fit=1600%2C1067',
           fullName: 'Dima',
           followed: true,
           status: 'i am a boss',
           location:  {country: 'Belarus', city: 'Minsk'},
       }
   ]
}

export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {


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