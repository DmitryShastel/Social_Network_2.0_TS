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
    _callSubscriber: (arg:StateType) => void
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
    subscribe: (abserver: () => void) => void

}

// export type addPostType = () => void
// export type updateNewPostTextType = (newPostText: string) => void

export type ActionType = {
    type: string
    newPostText: string
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
   _callSubscriber (state: StateType) {},
    subscribe (abserver: (state: StateType) => void) {
        this._callSubscriber = abserver
    },
    dispatch(action: ActionType) {
        if(action.type === 'ADD-POST') {
            let newPost: PostsType =
                {
                    id: new Date().getTime(),
                    message: this._state.profilePage.newPostText,
                    like: 0
                };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber(this._state)
        }

    }
}

// addPost () {
//     let newPost: PostsType =
//         {
//             id: new Date().getTime(),
//             message: this._state.profilePage.newPostText,
//             like: 0
//         };
//     this._state.profilePage.posts.push(newPost)
//     this._state.profilePage.newPostText = ''
//     this._callSubscriber(this._state)
// },
// updateNewPostText(newPostText: string) {
//     this._state.profilePage.newPostText = newPostText
//     this._callSubscriber(this._state)
// },