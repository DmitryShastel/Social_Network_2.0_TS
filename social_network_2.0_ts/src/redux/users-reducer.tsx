// const FOLLOW = 'FOLLOW'
// const UNFOLLOW = 'UNFOLLOW'
// const SET_USERS = 'SET_USERS'
// const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
// const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
//
// export type FollowACType = (userId: number) => FollowActionType
// export type UnfollowACType = (userId: number) => UnfollowActionType
// export type SetUsersACType = (users: Array<UserType>) => SetUsersActionType
// export type SetCurrentPageACType = (currentPage: any) => SetCurrentPageActionType
// export type setTotalUserCountACType = (totalUsersCount: any) => setTotalUserCountActionType
//
// export type FollowActionType = {
//     type: 'FOLLOW',
//     userId: number
// }
// export type UnfollowActionType = {
//     type: 'UNFOLLOW',
//     userId: number
// }
// export type SetUsersActionType = {
//     type: 'SET_USERS',
//     users: Array<UserType>
// }
// export type SetCurrentPageActionType = {
//     type: 'SET_CURRENT_PAGE',
//     currentPage: any
// }
// export type setTotalUserCountActionType = {
//     type: 'SET_TOTAL_USERS_COUNT',
//     count: any
// }
//
// export type ActionType =
//     FollowActionType |
//     UnfollowActionType |
//     SetUsersActionType |
//     SetCurrentPageActionType |
//     setTotalUserCountActionType
//
// export const followAC: FollowACType = (userId: number): FollowActionType => {
//     return {
//         type: FOLLOW,
//         userId
//     }
//
// export type UserType = {
//     id: number
//     name: string
//     followed: boolean
//     status: any
//     photos: {small: any, large: any}
// }
//
//
// let initialState = {
//     users: [] as Array<UserType>,
//     pageSize: 5,
//     totalUsersCount: 0,
//     currentPage: 1
// }
//
// export type InitialStateType = typeof initialState
//
// export const userReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
//     switch (action.type) {
//         case FOLLOW:
//             return {
//                 ...state,
//                 users: state.users.map(u => {
//                     if (u.id === action.userId) {
//                         return {
//                             ...u, followed: true
//                         }
//                     }
//                     return u
//                 })
//             }
//         case UNFOLLOW:
//             return {
//                 ...state,
//                 users: state.users.map(u => {
//                     if (u.id === action.userId) {
//                         return {
//                             ...u, followed: false
//                         }
//                     }
//                     return u
//                 })
//             }
//         case SET_USERS:
//             return {
//                 ...state,
//                 users: action.users
//             }
//         case SET_CURRENT_PAGE: {
//             return {...state, currentPage: action.currentPage}
//         }
//         case SET_TOTAL_USERS_COUNT: {
//             return {...state, totalUsersCount: action.count}
//         }
//         default:
//             return state
//     }
// }
//

// }
// export const unfollowAC: UnfollowACType = (userId: number): UnfollowActionType => {
//     return {
//         type: UNFOLLOW,
//         userId
//     }
// }
// export const setUsersAC: SetUsersACType = (users: Array<UserType>): SetUsersActionType => {
//     return {
//         type: SET_USERS,
//         users
//     }
// }
// export const setCurrentPageAC: SetCurrentPageACType = (currentPage: any): SetCurrentPageActionType => {
//     return {
//         type: SET_CURRENT_PAGE,
//         currentPage
//     }
// }
// export const setTotalUserCountAC: setTotalUserCountACType = (totalUsersCount: any): setTotalUserCountActionType => {
//     return {
//         type: SET_TOTAL_USERS_COUNT,
//         count: totalUsersCount
//     }
// }

import {usersAPI} from "../API/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export const userReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    //@ts-ignore
                    if (u.id === action.usersId) {
                        //@ts-ignore
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    //@ts-ignore
                    if (u.id === action.usersId) {
                        //@ts-ignore
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
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
            return state;
    }
}

export const followSuccess = (usersId: any) => {
    return {
        type: FOLLOW,
        usersId
    }
}
export const unfollowSuccess = (usersId: any) => {
    return {
        type: UNFOLLOW,
        usersId
    }
}
export const setUsers = (users: any) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPage = (currentPage: any) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export const setTotalUserCount = (totalUsersCount: any) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    }
}
export const toggleIsFetching = (isFetching: any) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export const toggleFollowingProgress = (isFetching: any, usersId: any) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        usersId
    }
}

//thunks
export const getUsers = (currentPage: any, pageSize: any) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUserCount(data.totalCount));
        })
    }
}
export const follow = (id: any) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, id))
        usersAPI.follow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(id));
            }
            dispatch(toggleFollowingProgress(false, id))
        });
    }
}
export const unfollow = (id: any) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, id))
        usersAPI.unFollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(id));
            }
            dispatch(toggleFollowingProgress(false, id))
        });
    }
}
