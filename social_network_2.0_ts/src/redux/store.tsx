import {AddMessageActionType, UpdateMessageActionType} from "./dialogs-reducer";
import {AddNewActionType, UpdateNewActionType} from "./news-reducer";
import {AddPostActionType, OnPostChangeActionType} from "./profile-reducer";

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

//1-type of posts
type PostsType = {
    id: number
    message: string
    like: number
}
type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
//2-type of messages
 type MessageType = {
    id: number
    message: string
}
 type DialogsType = {
    id: number
    name: string
}
 type dialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
}
//3-type of news
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

type DispatchType = (action: ActionType) => void


// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi how are you', like: 15},
//                 {id: 2, message: 'It is my first post', like: 23}
//             ],
//             newPostText: '',
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Dima'},
//                 {id: 2, name: 'Sasha'},
//                 {id: 3, name: 'Alex'}
//             ],
//
//             messages: [
//                 {id: 10, message: 'hi'},
//                 {id: 2, message: 'buy'},
//                 {id: 3, message: 'buy now'}
//             ],
//             newMessageBody: '',
//         },
//         newsPage: {
//             news: [
//                 {id: 1, new: 'new #1'},
//                 {id: 1, new: 'new #2'},
//                 {id: 1, new: 'new #3'}
//             ],
//             newNewsText: ''
//         }
//     },
//     getState() {
//         return this._state
//     },
//     _callSubscriber() {
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//     dispatch(action: ActionType) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.newsPage = newsReducer(this._state.newsPage, action)
//         this._callSubscriber(this._state)
//     }
// }
