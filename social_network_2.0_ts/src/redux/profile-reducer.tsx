import {
    ActionType,
    PostsType,
    ProfilePageType,
} from "./state";


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

export const profileReducer = (state: ProfilePageType, action: ActionType) :ProfilePageType => {
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