export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: dialogsPageType

}
export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type dialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
export type PostsType = {
    id: number
    message: string
    like: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (arg: StateType) => void
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
    subscribe: (observer: () => void) => void

}



export type DispatchType = (action: ActionType) => void


export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi how are you', like: 15},
                {id: 2, message: 'It is my first post', like: 23}
            ],
            newPostText: '',
        },


        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Alex'}
            ],

            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'buy'},
                {id: 3, message: 'buy now'}
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: StateType) {
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionType) {
        if (action.type === ADD_POST) {
            let newPost: PostsType =
                {
                    id: new Date().getTime(),
                    message: this._state.profilePage.newPostText,
                    like: 0
                };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber(this._state)
        }

    }
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'



export type AddPostActionType = {
    type: string
}
export type OnPostChangeActionType = (text: string) => void
export type ActionType = AddPostActionType | OnPostChangeActionType





export const addNewPostTextActionCreator: AddPostActionType = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator: OnPostChangeActionType = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: text
    }
}