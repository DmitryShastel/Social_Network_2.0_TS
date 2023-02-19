import {renderEntireTree} from "../render";

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

export type addPostType = () => void
export type updateNewPostTextType = (newPostText: string) => void

export let addPost = () => {
    let newPost: PostsType =
        {
            id: new Date().getTime(),
            message: state.profilePage.newPostText,
            like: 0
        }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state)
}
export let updateNewPostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText
    renderEntireTree(state)
}


export let state: StateType = {
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
}