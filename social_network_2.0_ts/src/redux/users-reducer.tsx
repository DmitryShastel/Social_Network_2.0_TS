const FOLLOW = 'FOLLOW'

export type FollowACType = (userId: any) => FollowActionType

export type FollowActionType = {
    type: 'FOLLOW',
    userId: number
}

export type ActionType = FollowActionType | UpdateMessageActionType

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
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u
                })
            }


        default:
            return state
    }
}

export const followAC: FollowACType = (userId: any) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const updateNewMessageBodyActionCreator: UpdateMessageActionCreatorType = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        body: body
    }
}


const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


export type UpdateMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    body: string
}


export type UpdateMessageActionCreatorType = (body: string) => UpdateMessageActionType




export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}