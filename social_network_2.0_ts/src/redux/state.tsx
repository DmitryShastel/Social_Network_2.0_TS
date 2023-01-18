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
}

export type addPostType = (postText: string) => void

export let addPost = (postText: string) => {
    let newPost: PostsType = {id: new Date().getTime(), message: postText, like: 0}
    state.profilePage.posts.push(newPost)
    renderEntireTree(state)
}


export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi how are you', like: 15},
            {id: 2, message: 'It is my first post', like: 23}]
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