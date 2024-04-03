import {usersAPI} from "../API/api";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export type FollowACType = (userId: number) => FollowActionType
export type UnfollowACType = (userId: number) => UnfollowActionType
export type SetUsersACType = (users: Array<UserType>) => SetUsersActionType
export type SetCurrentPageACType = (currentPage: number) => SetCurrentPageActionType
export type SetTotalUserCountACType = (totalUsersCount: number) => SetTotalUserCountActionType
export type ToggleIsFetchingACType = (isFetching: boolean) => ToggleIsFetchingActionType
export type ToggleFollowingProgressACType = (isFetching: boolean, usersId: number) => ToggleFollowingProgressActionType

export type FollowActionType = {
    type: 'FOLLOW',
    userId: number
}
export type UnfollowActionType = {
    type: 'UNFOLLOW',
    userId: number
}
export type SetUsersActionType = {
    type: 'SET_USERS',
    users: Array<UserType>
}
export type SetCurrentPageActionType = {
    type: 'SET_CURRENT_PAGE',
    currentPage: any
}
export type SetTotalUserCountActionType = {
    type: 'SET_TOTAL_USERS_COUNT',
    count: any
}
export type ToggleIsFetchingActionType = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}
export type ToggleFollowingProgressActionType = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
    isFetching: boolean
    usersId: number
}

export type UserActionsType =
    FollowActionType |
    UnfollowActionType |
    SetUsersActionType |
    SetCurrentPageActionType |
    SetTotalUserCountActionType |
    ToggleIsFetchingActionType |
    ToggleFollowingProgressActionType


export type UserType = {
    id: number
    name: string
    followed: boolean
    status: string
    photos: { small: string, large: string }
}


let InitialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
}

export type InitialUsersStateType = typeof InitialState

export const userReducer = (state: InitialUsersStateType = InitialState, action: UserActionsType)
    : InitialUsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: false
                        }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.usersId]
                    : state.followingInProgress.filter(id => id !== action.usersId)
            }
        }
        default:
            return state
    }
}


export const followSuccessAC: FollowACType = (userId: number): FollowActionType => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowSuccessAC: UnfollowACType = (userId: number): UnfollowActionType => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersAC: SetUsersACType = (users: Array<UserType>): SetUsersActionType => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPageAC: SetCurrentPageACType = (currentPage: number): SetCurrentPageActionType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export const setTotalUserCountAC: SetTotalUserCountACType = (totalUsersCount: number)
    : SetTotalUserCountActionType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    }
}
export const toggleIsFetchingAC: ToggleIsFetchingACType = (isFetching: boolean): ToggleIsFetchingActionType => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export const toggleFollowingProgressAC: ToggleFollowingProgressACType = (isFetching: boolean, usersId: number)
    : ToggleFollowingProgressActionType => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        usersId
    }
}


// //thunks
export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<UserActionsType>) => {
        dispatch(toggleIsFetchingAC(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetchingAC(false));
            dispatch(setUsersAC(data.items));
            dispatch(setTotalUserCountAC(data.totalCount));
        })
    }
}
export const follow = (id: number) => {
    return (dispatch: Dispatch<UserActionsType>) => {
        dispatch(toggleFollowingProgressAC(true, id))
        usersAPI.follow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccessAC(id));
            }
            dispatch(toggleFollowingProgressAC(false, id))
        });
    }
}
export const unfollow = (id: number) => {
    return (dispatch: Dispatch<UserActionsType>) => {
        dispatch(toggleFollowingProgressAC(true, id))
        usersAPI.unFollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccessAC(id));
            }
            dispatch(toggleFollowingProgressAC(false, id))
        });
    }
}

