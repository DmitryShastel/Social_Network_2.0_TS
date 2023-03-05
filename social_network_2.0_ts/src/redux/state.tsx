import {AddPostActionType, OnPostChangeActionType, profileReducer} from "./profile-reducer";

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (arg: StateType) => void
    subscribe: (observer: () => void) => void
    dispatch: DispatchType
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
    newMessageBody: string
}
//3
export type NewsType = {
    id: number
    new: string
}
export type newsPageType = {
    news: Array<NewsType>
    newNewsText: string
}


export type ActionType =
    AddPostActionType
    | OnPostChangeActionType
    | AddMessageActionType
    | UpdateMessageActionType
    | AddNewActionType
    | UpdateNewActionType

export type DispatchType = (action: ActionType) => void


export let store: StoreType = {
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
            newMessageBody: '',
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
    _callSubscriber() {
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionType) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._callSubscriber(this._state)


        // if (action.type === ADD_POST) {
        //     let newPost: PostsType =
        //         {
        //             id: new Date().getTime(),
        //             message: this._state.profilePage.newPostText,
        //             like: 0
        //         };
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = ''
        //     this._callSubscriber(this._state)
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newPostText
        //     this._callSubscriber(this._state)
        // } else if (action.type === SEND_MESSAGE) {
        //     let body = this._state.dialogsPage.newMessageBody
        //     this._state.dialogsPage.newMessageBody = ''
        //     this._state.dialogsPage.messages.push({id: new Date().getTime(), message: body})
        //     this._callSubscriber(this._state)
        // } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        //     this._state.dialogsPage.newMessageBody = action.body
        //     this._callSubscriber(this._state)
        // } else if (action.type === ADD_NEW) {
        //     let newNew: NewsType = {
        //         id: new Date().getTime(),
        //         new: this._state.newsPage.newNewsText
        //     }
        //     this._state.newsPage.news.push(newNew)
        //     this._state.newsPage.newNewsText = ''
        //     this._callSubscriber(this._state)
        // } else if (action.type === UPDATE_NEW) {
        //     this._state.newsPage.newNewsText = action.newNewsText
        //     this._callSubscriber(this._state)
        // }
    }
}


//News
const ADD_NEW = 'ADD-NEW'
const UPDATE_NEW = 'UPDATE-NEW'

//types of actions:

//news
export type AddNewActionType = {
    type: 'ADD-NEW'
}
export  type UpdateNewActionType = {
    type: 'UPDATE-NEW',
    newNewsText: string
}


//types of Action Creators

//news
export type AddNewActionCreatorType = () => AddNewActionType
export type UpdateNewActionCreatorType = (text: string) => UpdateNewActionType


//Action Creators

//news
export const addNewActionCreator: AddNewActionCreatorType = () => {
    return {
        type: ADD_NEW
    }
}
export const updateNewActionCreator: UpdateNewActionCreatorType = (text) => {
    return {
        type: UPDATE_NEW,
        newNewsText: text
    }
}