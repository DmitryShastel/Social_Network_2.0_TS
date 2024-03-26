// type ActionType = AddPostActionType | OnPostChangeActionType
// export type AddPostActionType = {
//     type: 'ADD-POST'
// }
// export type OnPostChangeActionType = {
//     type: 'UPDATE-NEW-POST-TEXT',
//     newPostText: string
// }
//
// export type AddNewPostTextActionCreatorType = () => AddPostActionType
// export type UpdateNewPostTextActionCreatorType = (text: string) => OnPostChangeActionType
//
// const ADD_POST = 'ADD-POST'
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
//
// export type PostsType = {
//     id: number
//     message: string
//     like: number
// }
//
//
// let initialState = {
//     posts: [
//         {id: 1, message: 'Hi how are you', like: 15},
//         {id: 2, message: 'It is my first post', like: 23}
//     ] as Array<PostsType>,
//     newPostText: '',
// }
//
// export type initialStateType = typeof initialState
//
// export const profileReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
//     switch (action.type) {
//         case ADD_POST: {
//             let newPost: PostsType =
//                 {
//                     id: new Date().getTime(),
//                     message: state.newPostText,
//                     like: 0
//                 };
//             return {
//                 ...state,
//                 posts: [...state.posts, newPost],
//                 newPostText: ''
//             }
//         }
//         case UPDATE_NEW_POST_TEXT:
//             return {
//                 ...state,
//                 newPostText: action.newPostText
//             }
//
//         default:
//             return state
//     }
// }
//
// export const addNewPostTextActionCreator: AddNewPostTextActionCreatorType = () => {
//     return {
//         type: ADD_POST
//     }
// }
// export const updateNewPostTextActionCreator: UpdateNewPostTextActionCreatorType = (text) => {
//     return {
//         type: UPDATE_NEW_POST_TEXT,
//         newPostText: text
//     }
// }

import {profileAPI, usersAPI} from "../API/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET_STATUS'


let initialState = {
    posts: [
        {id: 1, message: 'Hi how are you', like: 15},
        {id: 2, message: 'It is my first post', like: 23}
    ],
    newPostText: '',
    profile: null,
    status: '',
}

export const profileReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 5, message: state.newPostText, like: 0}
            return {
                ...state, posts: [...state.posts, newPost], newPostText: ''
            }
        }
        case UPDATE_NEW_POST: {
            return {
                ...state, newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostActionCreator = (text: any) => {
    return {
        type: UPDATE_NEW_POST,
        newText: text
    }
}
export const setUserProfileActionCreator = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export const setStatusActionCreator = (status: any) => {
    return {
        type: SET_STATUS,
        status
    }
}

//thunks
export const getUserProfile = (userId: any) => (dispatch: any) => {
    usersAPI.getUserProfile(userId)
        .then(data => {
            dispatch(setUserProfileActionCreator(data))
        })
}

export const getStatus = (userId: any) => (dispatch: any) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatusActionCreator(data))
        })
}

export const updateStatus = (status: any) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatusActionCreator(status))
            }
        })
}