import {Dispatch} from "redux"
import {profileAPI, usersAPI} from "../API/api";

type ProfileActionsType = AddPostActionType | OnPostChangeActionType | SetUserProfileActionType | SetStatusActionType


export type AddPostActionType = {
    type: 'ADD-POST'
}
export type OnPostChangeActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newPostText: string
}
export type SetUserProfileActionType = {
    type: 'SET-USER-PROFILE'
    profile: null | string
}
export type SetStatusActionType = {
    type: 'SET_STATUS'
    status: string
}

export type AddNewPostTextActionCreatorType = () => AddPostActionType
export type UpdateNewPostTextActionCreatorType = (text: string) => OnPostChangeActionType
export type SetUserProfileActionCreatorType = (profile: null | string) => SetUserProfileActionType
export type SetStatusActionCreatorType = (status: string) => SetStatusActionType

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET_STATUS'

export type PostsType = {
    id: number
    message: string
    like: number
}


let initialState = {
    posts: [
        {id: 1, message: 'Hi how are you', like: 15},
        {id: 2, message: 'It is my first post', like: 23}
    ] as Array<PostsType>,
    newPostText: '',
    profile: null as string | null,
    status: '',
}

export type initialProfileStateType = typeof initialState

export const profileReducer = (state: initialProfileStateType = initialState, action: ProfileActionsType)
    : initialProfileStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostsType =
                {
                    id: new Date().getTime(),
                    message: state.newPostText,
                    like: 0
                };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
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
export const setUserProfileActionCreator: SetUserProfileActionCreatorType = (profile: null | string): SetUserProfileActionType => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export const setStatusActionCreator: SetStatusActionCreatorType = (status: string): SetStatusActionType => {
    return {
        type: SET_STATUS,
        status
    }
}

//thunks
export const getUserProfile = (userId: number) => (dispatch: Dispatch<ProfileActionsType>) => {
    usersAPI.getUserProfile(userId)
        .then(data => {
            dispatch(setUserProfileActionCreator(data))
        })
}
export const getStatus = (userId: number) => (dispatch: Dispatch<ProfileActionsType>) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatusActionCreator(data))
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch<ProfileActionsType>) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatusActionCreator(status))
            }
        })
}