type ActionType = AddPostActionType | OnPostChangeActionType
export type AddPostActionType = {
    type: 'ADD-POST'
}
export type OnPostChangeActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newPostText: string
}

export type AddNewPostTextActionCreatorType = () => AddPostActionType
export type UpdateNewPostTextActionCreatorType = (text: string) => OnPostChangeActionType

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

type ProfileReducerType = {
    posts: Array<PostsType>
    newPostText: string
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


let initialState = {
    posts: [
        {id: 1, message: 'Hi how are you', like: 15},
        {id: 2, message: 'It is my first post', like: 23}
    ] as Array<PostsType>,
    newPostText: '',
}

export type initialStateType = typeof initialState

export const profileReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType =
                {
                    id: new Date().getTime(),
                    message: state.newPostText,
                    like: 0
                };
            state.posts.push(newPost)
            state.newPostText = ''
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText
            return state;

        default:
            return state
    }
}

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