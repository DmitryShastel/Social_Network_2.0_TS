export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (arg: StateType) => void
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
    subscribe: (observer: () => void) => void

}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: dialogsPageType
    newsPage: newsPageType
}

//1
export type PostsType = {
    id: number
    message: string
    like: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
//2
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
    newMessageText: string
}
//3
export type NewsType = {
    id: number
    new: string
}
export type newsPageType = {
    news: Array<NewsType>
}


export type ActionType = AddPostActionType
    | OnPostChangeActionType
    | AddMessageActionType
    | UpdateMessageActionType
    | AddNewActionType

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
                {id: 10, message: 'hi'},
                {id: 2, message: 'buy'},
                {id: 3, message: 'buy now'}
            ],
            newMessageText: '',
        },
        newsPage: {
            news: [
                {id: 1, new: 'new #1'},
                {id: 1, new: 'new #2'},
                {id: 1, new: 'new #3'}
            ],
            newNewsText: ''
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
        } else if (action.type === ADD_MESSAGE) {
            let newMessage: MessageType = {
                id: new Date().getTime(),
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessageText
            this._callSubscriber(this._state)
        } else if (action.type === ADD_NEW) {
            let newNew : NewsType = {
                id: new Date().getTime(),
                new: this._state.newsPage.newNewsText
            }
            this._state.newsPage.news.push(newNew)
            this._state.newsPage.newNewsText = ''
            this._callSubscriber(this._state)
        }
    }

}

//Post
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
//Message
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
//News
const ADD_NEW = 'ADD-NEW'

//types of actions:
//post
export type AddPostActionType = {
    type: 'ADD-POST'
}
export type OnPostChangeActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newPostText: string
}
//message
export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
export type UpdateMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessageText: string
}
//news
export type AddNewActionType = {
    type: 'ADD-NEW'
}


//types of Action Creators
export type AddNewPostTextActionCreatorType = () => AddPostActionType
export type UpdateNewPostTextActionCreatorType = (text: string) => OnPostChangeActionType
export type AddNewMessageActionCreatorType = () => AddMessageActionType
export type UpdateMessageActionCreatorType = (text: string) => UpdateMessageActionType

export const addNewPostTextActionCreator: AddNewPostTextActionCreatorType = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator: UpdateNewPostTextActionCreatorType = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: text
    }
}
export const addNewMessageActionCreator: AddNewMessageActionCreatorType = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateNewMessageTextActionCreator: UpdateMessageActionCreatorType = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text
    }
}