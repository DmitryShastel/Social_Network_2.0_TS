const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export type FollowACType = (userId: number) => FollowActionType
export type UnfollowACType = (userId: number) => UnfollowActionType
export type SetUsersACType = (users: Array<UserType>) => SetUsersActionType

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

export type ActionType = FollowActionType | UnfollowActionType | SetUsersActionType

export type UserType = {
    id: number
    photoUrl: string
    fullName: string
    followed: boolean
    status: string
    location: LocationType
}

export type LocationType = {
    country: string
    city: string
}

let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://www.denofgeek.com/wp-content/uploads/2021/12/the-matrix-resurrections-agent-smith-hugo-weaving.jpg?fit=1600%2C1067',
        //     fullName: 'Dima',
        //     followed: false,
        //     status: 'I am a boss',
        //     location: {country: 'Belarus', city: 'Minsk'},
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://www.denofgeek.com/wp-content/uploads/2021/12/the-matrix-resurrections-agent-smith-hugo-weaving.jpg?fit=1600%2C1067',
        //     fullName: 'Vasa',
        //     followed: true,
        //     status: 'I am a boss too',
        //     location: {country: 'Russia', city: 'Moscow'},
        // },

    ] as Array<UserType>
}

export type InitialStateType = typeof initialState

export const userReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed:  true
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

        default:
            return state
    }
}

export const followAC: FollowACType = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowAC: UnfollowACType = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersAC: SetUsersACType = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    }
}